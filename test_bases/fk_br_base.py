from decore_base import decore

from test_models.fk_br_model import Fk_br_model as Model

@decore.base(title='ForeignKey Backref Base', icon='mdi-test-tube', model=Model)
class Fk_br_base:
    pass