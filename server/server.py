from flask import Flask
from flask_graphql import GraphQLView
from flask_cors import CORS
import graphene

# class Query(graphene.ObjectType):
#     hello = graphene.String(name=graphene.String(default_value='World'))

#     def resolve_hello(self, info, name):
#         return f"hello {name}"

class CreateItem(graphene.Mutation):
    class Arguments:
        name = graphene.String(required=True)
        value = graphene.Int()

    id = graphene.Int()
    name = graphene.String()

    def mutate(root, info, name, value=None):
        return CreateItem(id=1, name=name)

schema = graphene.Schema(query=CreateItem)


app = Flask(__name__)
CORS(app)
app.add_url_rule(
    '/graphql',
    view_func=GraphQLView.as_view(
        'graphql', 
        schema=schema, 
        graphiql = True
))

## Rule for graphql to support batch query in apollo client
app.add_url_rule('/graphql/batch', view_func=GraphQLView.as_view(
    'graphql',
    schema=schema,
    batch=True
))

if __name__ == '__main__':
    app.run(port=5173, debug=True)