from decore_base import decore

from test_models.test_manytomany_backref_model import Test_manytomany_backref_model as Model

@decore.base(title='Test ManyToMany Backref Base', icon='mdi-test-tube', model=Model)
class Test_manytomany_backref_base:
    pass