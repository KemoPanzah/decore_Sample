from decore_base import decore

from test_models.mm_model import Mm_model as Model

@decore.base(title='ManyToMany Base', icon='mdi-test-tube', model=Model)
class Mm_base:
    pass