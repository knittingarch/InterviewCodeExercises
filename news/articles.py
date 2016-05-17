from requests import get, post

import pdb


def news_articles(request):
    pdb;
    grab_articles = get(
        'http://www.stellarbiotechnologies.com/media/press-releases/json',
        params={
            limit: 10,
            offset: 10,
        },
    )
    grab_articles.raise_for_status()
    read_articles = grab_articles.json()
    if read_articles ["news"] != 0:
        print read_articles



# def create_cpanel_account(student, password):
#     username_prefix = (student.first_name[0] + student.last_name).lower()
#     for number in chain([''], count(1)):
#         username = squish_to_8(username_prefix, str(number))
#         account_creation = post(
#             'https://cpanel.cornerstonereputation.website:2087/json-api/createacct',
#             auth=settings.WHM_AUTH_SECRET,
#             params={
#                 'api.version': 1,
#                 'domain': student.domain,
#                 'username': username,
#                 'password': password,
#                 'plan': 'root_StudentHostAccount_07AUG2015',
#                 'contactemail': student.user.email,
#             },
#         )
#         account_creation.raise_for_status()
#         account_status = account_creation.json()
#         if account_status['metadata']['result'] == 1:
#             return username
#         if (
#                 'This system already has an account named' not in
#                 account_status['metadata']['reason']):
#             raise IOError('account creation failed: {}'.format(account_status))