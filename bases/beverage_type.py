from decore_base import decore

from models.beverage_type_model import Beverage_type_model as Model

@decore.base(title='Beverage_type', icon='mdi-liquor', model=Model)
class Beverage_type:
    @decore.view(parent_id='beverage_cat_vi1' , title='Beverage types', icon='mdi-liquor', type='table', fields=Model.field_s)
    def Beverage_type_vi1():
        @decore.dialog(title='Add Beverage type', icon='mdi-plus', activator='default')
        def Beverage_type_vi1_di1():
            @decore.widget(title='Add a Beverage type', type='form', fields=[Model.beverage_cat, Model.title])
            def Beverage_type_vi1_di1_wi1():
                @decore.action(type='submit', title='Submit Beverage type')
                def Beverage_type_vi1_di1_wi1_ac1(self, item:Model, **kwargs):
                    if item.save():
                        return True, item.title + ' was successfully added!'
                    else:
                        return False, 'Error!' + str(item.errors)