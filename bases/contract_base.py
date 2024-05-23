from decore_base import decore
from models.contract_model import Contract_model as Model

import datetime

@decore.base(title='Contract management', model=Model)
class Contract_base:
    
    @decore.function(type='shot')
    def test_model(self, **kwargs):
        t_item = Model()
        pass

    @decore.widget(parent_id='per_vi1_di1_wi1', title='Contract', icon='mdi-certificate', type='info', fields=[Model.position, Model.start_date, Model.end_date, Model.fixed_term])
    def per_vi1_di1_wi1_wi1():
        @decore.dialog(title='Add contract', icon='mdi-plus' , type='standard', activator='default')
        def per_vi1_di1_wi1_wi1_di1():
            @decore.widget(title='Add a contract', type='form', fields=[Model.position, Model.fixed_term])
            def per_vi1_di1_wi1_wi1_di1_wi1():
                @decore.action(type='submit', title='Submit Contract')
                def per_vi1_di1_wi1_wi1_di1_wi1_ac1(self, item, **kwargs):
                    item.title = item.person.title + ' - ' + item.position
                    t_time_test = item.start_date
                    item.end_date = item.start_date + datetime.timedelta(days=365*item.fixed_term)    
                    if item.save():
                        return True, 'Success!'
                    else:
                        return False, 'Error!'

    @decore.view(parent_id='Person_base', title='Contracts', icon='mdi-certificate', type="table", fields=Model.field_s)
    def contracts():
        @decore.dialog(title='Contract Details', type='standard', display='draw-half', activator='click')
        def contract_details():
            @decore.widget(title='Informations', icon='mdi-certificate', type='info', fields=Model.field_s)
            def contract_details_informations():
                pass
               