from decore_base import decore

from models.test_manytomany_model import Test_manytomany_model as Model

@decore.base(title='Test ManyToMany Base', icon='mdi-test-tube', model=Model)
class Test_manytomany_base:
    pass