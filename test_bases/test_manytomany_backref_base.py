from decore_base import decore

from test_models.mm_br_model import Mm_br_model as Model

@decore.base(title='Test ManyToMany Backref Base', icon='mdi-test-tube', model=Model)
class Test_manytomany_backref_base:
    pass