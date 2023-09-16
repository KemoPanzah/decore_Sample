from decore_base import decore

from test_models.mm_model import Mm_model as Model

@decore.base(title='Test ManyToMany Base', icon='mdi-test-tube', model=Model)
class Test_manytomany_base:
    pass