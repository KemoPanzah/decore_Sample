from decore_base import decore
from models.keycard_model import Keycard_model as Model

@decore.base(title='Keycard', icon='mdi-key', model=Model)
class Keycard_base:
    @decore.view(parent_id='Person_base', title='Keycards', icon='mdi-key', type='table', fields=Model.field_s)
    def key_vi1():
        pass

    @decore.widget(parent_id='per_vi1_di1_wi1', title='Keycards', icon='mdi-key', type='table', fields=Model.field_s)
    def per_vi1_di1_wi2():
        @decore.dialog(title='Add Keycard', icon='mdi-plus', type='standard', activator='default')
        def per_vi1_di1_wi2_di1():
            @decore.widget(title='Add a Keycard', type='form', fields=[Model.master])
            def per_vi1_di1_wi2_di1_wi1():
                @decore.action(type='submit', title='Submit Keycard')
                def per_vi1_di1_wi2_di1_wi1_ac1(self, item:Model, **kwargs):
                    if item.save():
                        return True, item.title + ' was successfully added!'
                    else:
                        return False, 'Error!' + str(item.errors)