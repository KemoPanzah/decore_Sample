import random

from decore_base import decore
from test_models.test_model import Test_model as Model
from test_models.test_foreign_model import Test_foreign_model
from test_models.test_manytomany_model import Test_manytomany_model
from test_models.test_manytomany_backref_model import Test_manytomany_backref_model

@decore.base(title='Test Base 1', icon='mdi-test-tube', model=Model)
class Test_base:

    @decore.function()
    def tst_fu1(self):

        t_item = Model()
        
        t_item = Test_foreign_model.get_or_none(Test_foreign_model.title == 'Test_item : default')
        if not t_item:
            t_item = Test_foreign_model()
            t_item.id = '5ee30840-4714-11ee-a9ff-309c23812330'
            t_item.title = 'Test_item : default'
            t_item.options = True
            t_item.save()

        while Test_foreign_model.select().count() < 10:
            t_item = Test_foreign_model()
            t_item.title = 'Test_item : ' + t_item.id
            t_item.options = bool(random.getrandbits(1))
            t_item.save()

        t_item = Test_manytomany_model.get_or_none(Test_manytomany_model.title == 'Test_item : default')
        if not t_item:
            t_item = Test_manytomany_model()
            t_item.id = '7d51da15-472f-11ee-83b4-309c23812330'
            t_item.title = 'Test_item : default'
            t_item.options = True
            t_item.save()

        while Test_manytomany_model.select().count() < 10:
            t_item = Test_manytomany_model()
            t_item.title = 'Test_item : ' + t_item.id
            t_item.options = bool(random.getrandbits(1))
            t_item.save()

        t_item = Test_manytomany_backref_model.get_or_none(Test_manytomany_backref_model.title == 'Test_item : default')
        if not t_item:
            t_item = Test_manytomany_backref_model()
            t_item.id = '7d51da15-472f-11ee-83b4-309c23812330'
            t_item.title = 'Test_item : default'
            t_item.options = True
            t_item.save()

        while Test_manytomany_backref_model.select().count() < 10:
            t_item = Test_manytomany_backref_model()
            t_item.title = 'Test_item : ' + t_item.id
            t_item.options = bool(random.getrandbits(1))
            t_item.save()

    @decore.view(title='Formtest', icon='mdi-test-tube', type='table')
    def tst_vi1():
        @decore.dialog(title='Formtest', icon='mdi-test-tube', type='standard', display='drawer', activator='none')
        def tst_vi1_di1():
            @decore.widget(title='Formtest', icon='mdi-test-tube', type='form', fields=[Model.boolean, Model.char, Model.date, Model.datetime,Model.float,Model.foreignkey, Model.int, Model.manytomany, Model.mm_backrefs ,Model.text, Model.password])
            def tst_vi1_di1_wi1():
                @decore.action(title='Submit', type='submit', icon='mdi-test-tube')
                def tst_vi1_di1_wi1_ac1(self, item:Model, **kwargs):
                    item.title = 'Test_item'
                    item.save()
                    return True, 'Success'