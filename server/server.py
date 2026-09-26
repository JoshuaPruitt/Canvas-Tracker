from flask import Flask
from flask_graphql import GraphQLView
import graphene

class Query(graphene.ObjectType):
    hello = graphene.String(name=graphene.String(default_value='World'))

    def resolve_hello(self, info, name):
        return f"hello {name}"

schema = graphene.Schema(query=Query)

app = Flask(__name__)
app.add_url_rule(
    '/graphql',
    view_func=GraphQLView.as_view('graphql', schema=schema, graphiql = True)
)

if __name__ == '__main__':
    app.run(port=5000, debug=True)