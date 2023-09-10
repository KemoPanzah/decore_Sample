from decore_base import decore
from models.person_model import Person_model as Model

import time

@decore.base(title='Personal management',icon='mdi-account-group' , model=Model)
class Person_base:
    
    @decore.view(title='Persons', icon='mdi-account', type='table', fields=[Model.title, Model.academic_degree ,Model.age, Model.contracts], filters=[Model.academic_degree, Model.contracts])
    def per_vi1():
        
        @decore.dialog(title='Add person', icon='mdi-plus' , type='standard', activator='default')
        def per_vi1_di3():
            @decore.widget(title='Add a person', type='form', fields=[Model.first_name, Model.last_name, Model.academic_degree, Model.age])
            def per_vi1_di3_wi1():
                @decore.action(type='submit', title='Submit Person')
                def per_vi1_di3_wi1_ac1(self, item:Model, **kwargs):
                    item.title = item.first_name + ' ' + item.last_name
                    if item.save():
                        return True, item.title + ' was successfully added!'
                    else:
                        return False, 'Error!'
        
        @decore.action(title='Remove Persons', icon='mdi-delete', type='standard', activator='default')
        def per_vi1_ac1(self, select_s, **kwargs):
            if not len(select_s) == 0:
                for i_select in select_s:
                    t_item = Model.get_by_id(i_select['id'])
                    t_item.delete_instance()
                return True, 'Success!'
            else:
                return False, 'No items selected!'
            
        @decore.action(title='Test Progress', icon='mdi-progress-clock', type='standard', activator='default')
        def per_vi1_ac2(self, active, **kwargs):
            for i in range(0, 100):
                active.progress = i
                time.sleep(0.1)
            return True, 'Time is over, my friend!'
        
        @decore.dialog(title='Person', type='standard', display='drawer', activator='click')
        def per_vi1_di1():
            @decore.widget(title='Informations', type='info', fields=Model.field_s)
            def per_vi1_di1_wi1():
                @decore.dialog(title='Edit Person', icon='mdi-pencil', type='standard', display='drawer', activator='context')
                def per_vi1_di1_wi1_di1():
                    @decore.widget(type='form', fields=[Model.first_name, Model.last_name])
                    def per_vi1_di1_wi1_di1_wi1():
                        @decore.action(type='submit')
                        def per_vi1_di1_wi1_di1_wi1_ac1(self, **kwargs):
                            return True, 'Success!'
        
        @decore.dialog(title='Edit Person', icon='mdi-pencil', type='standard', display='drawer', activator='context')
        def per_vi1_di2():
            @decore.widget(type='form', fields=[Model.first_name, Model.last_name])
            def per_vi1_di2_wi1():
                @decore.action(type='submit')
                def per_vi1_di2_wi1_ac1(self, item, **kwargs):
                    if item.save():
                        return True, 'Success!'
                    else:
                        return False, 'Error!'