from decore_base import decore

from models.test_foreign_model import Test_foreign_model as Model

@decore.base(title='Test Foreign Base', icon='mdi-test-tube', model=Model)
class Test_foreign_base:
    pass