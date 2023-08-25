from decore_base import decore
from models.test_model import Test_model

@decore.base(title='Test Base 1', icon='mdi-test-tube', model=Test_model)
class Test_base:
    @decore.view(title='Formtest', icon='mdi-test-tube', type='table')
    def tst_vi1():
        @decore.dialog(title='Formtest', icon='mdi-test-tube', type='standard', display='drawer', activator='none')
        def tst_vi1_di1():
            @decore.widget(title='Formtest', icon='mdi-test-tube', type='form', fields=[Test_model.booleanfield, Test_model.charfield, Test_model.datefield, Test_model.datetimefield, Test_model.intfield, Test_model.textfield, Test_model.booleanfield , Test_model.passwordfield])
            def tst_vi1_di1_wi1():
                @decore.action(title='Submit', type='submit', icon='mdi-test-tube')
                def tst_vi1_di1_wi1_ac1(self, t_data):
                    t_item = Test_model()
                    t_item.title = 'Test_item'
                    t_item.datefield = t_data['item']['datefield']
                    # t_item.save()
                    return True, 'Success'