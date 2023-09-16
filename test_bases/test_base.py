import random

from decore_base import decore
from test_models.field_model import Field_model as Model
from test_models.fk_model import Fk_model
from test_models.mm_model import Mm_model
from test_models.mm_br_model import Mm_br_model

@decore.base(title='Test Base', icon='mdi-test-tube', model=Model)
class Test_base:

    @decore.function()
    def tst_fu1(self):
        
        t_item = Fk_model.get_or_none(Fk_model.title == 'Test_item : default')
        if not t_item:
            t_item = Fk_model()
            t_item.id = '5ee30840-4714-11ee-a9ff-309c23812330'
            t_item.title = 'Test_item : default'
            t_item.options = True
            t_item.save()

        while Fk_model.select().count() < 10:
            t_item = Fk_model()
            t_item.title = 'Test_item : ' + t_item.id
            t_item.options = bool(random.getrandbits(1))
            t_item.save()

        t_item = Mm_model.get_or_none(Mm_model.title == 'Test_item : default')
        if not t_item:
            t_item = Mm_model()
            t_item.id = '7d51da15-472f-11ee-83b4-309c23812330'
            t_item.title = 'Test_item : default'
            t_item.options = True
            t_item.save()

        while Mm_model.select().count() < 10:
            t_item = Mm_model()
            t_item.title = 'Test_item : ' + t_item.id
            t_item.options = bool(random.getrandbits(1))
            t_item.save()

        t_item = Mm_br_model.get_or_none(Mm_br_model.title == 'Test_item : default')
        if not t_item:
            t_item = Mm_br_model()
            t_item.id = '7d51da15-472f-11ee-83b4-309c23812330'
            t_item.title = 'Test_item : default'
            t_item.options = True
            t_item.save()

        while Mm_br_model.select().count() < 10:
            t_item = Mm_br_model()
            t_item.title = 'Test_item : ' + t_item.id
            t_item.options = bool(random.getrandbits(1))
            t_item.save()

    