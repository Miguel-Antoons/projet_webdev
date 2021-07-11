from flask import Blueprint, request, json
from .database import mysql


app_rgie = Blueprint('app_rgie', __name__)


@app_rgie.route('/api/rgie', methods=['GET', 'POST', 'PUT', 'DELETE'])
def rgie():
    connector = mysql.connection
    cur = connector.cursor()
    response = []

    # API will return all the projects
    if request.method == 'GET':
        # complete arguments according to the filter
        # then get all etiquettes and store them into the response variable
        response = get_all_rgie(set_arguments(request.args.get('filter')), cur)

    elif request.method == 'DELETE':
        response = delete_rgie(cur, int(request.args.get('id')))

    elif request.method == "POST":
        post_rgie()

    elif request.method == "PUT":
        put_rgie()

    connector.commit()
    cur.close()

    return json.dumps(response)


def get_all_rgie(arguments, cursor):
    response = []

    # prepare the sql statement (which contains arguments in order to
    # avoid sql injection)
    sql_procedure = """
        SELECT R.ID_LISTE_ARTICLE_RGIE, C.NOM_CLIENT, C.PRENOM_CLIENT,
            C.SOCIETE_CLIENT, R.CHANTIER,
            date_format(R.DATE, '%%D %%M %%Y')
        FROM rgie as R
            join clients as C on R.ID_CLIENT = C.ID_CLIENT
        WHERE R.DATE >= str_to_date(%s, %s)
            and extract(year from R.DATE) >= %s
            and extract(year from R.DATE) <= %s
        ORDER BY R.DATE desc"""

    cursor.execute(sql_procedure, arguments)

    # fetch the result
    results = cursor.fetchall()

    # turn the result into a list of dictionnaries
    for row in results:
        response.append({
            'id': row[0],
            'attribute1': f"{row[1]} {row[2]}, {row[3]}",
            'attribute2': row[4],
            'date': row[5]
        })

    return response


def set_arguments(filter):
    # complete arguments according to the filter
    if len(filter) > 4:
        return (filter, "%a %b %e %Y %H:%i:%s", 1, 999999999, )
    elif len(filter) == 4:
        return ("1999-01-01", "%Y-%m-%d", filter, filter, )
    else:
        return ("1999-01-01", "%Y-%m-%d", 1, 999999999, )


def post_rgie():
    return None


def put_rgie():
    return None


def delete_rgie(cursor, id_to_delete):
    # TODO write sql statement again according to the new rgie tables and
    # the articles table
    arguments = (id_to_delete, )

    # prepare the sql statement (which contains arguments in order
    # to avoid sql injection)
    sql_statement = """
        DELETE FROM rgie
        WHERE ID_LISTE_ARTICLE_RGIE = %s
    """

    # execute the statement along with its arguments
    cur.execute(sql_statement, arguments)

    # return the result of the statement
    return cursor.fetchall()
