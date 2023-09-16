from decore_base import decore

from test_models.fk_model import Fk_model as Model

@decore.base(title='ForeignKey Base', icon='mdi-test-tube', model=Model)
class Fk_base:
    pass