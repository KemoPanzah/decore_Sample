from decore_base import decore
from models.contract_model import Contract_model as Model

@decore.base(title='Contract management', model=Model)
class Contract_base:
    
    @decore.widget(parent_id='per_vi1_di1_wi1', title='Contracts', type='table', fields=Model.field_s)
    def per_vi1_di1_wi1_wi1():
        @decore.dialog(title='Add contract...', icon='mdi-plus' , type='standard', activator='default')
        def per_vi1_di1_wi1_wi1_di1():
            @decore.widget(title='Add a contract', type='form', fields=Model.field_s)
            def per_vi1_di1_wi1_wi1_di1_wi1():
                @decore.action(type='submit', title='Submit Contract')
                def per_vi1_di1_wi1_wi1_di1_wi1_ac1(self, data):
                    t_item = Model(**data['item'])
                    if t_item.save():
                        return True, 'Success!'
                    else:
                        return False, 'Error!'

    @decore.view(parent_id='Person_base', title='Contracts', icon='mdi-certificate', fields=Model.field_s)
    def con_vi1():
        @decore.dialog(title='Company', type='standard', display='drawer', activator='click')
        def con_vi1_di1():
            pass