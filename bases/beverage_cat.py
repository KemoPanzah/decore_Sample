from decore_base import decore

from models.beverage_cat_model import Beverage_cat_model as Model

@decore.base(title='Beverage category', icon='mdi-liquor', model=Model)
class Beverage_cat:
    @decore.view(parent_id='beverage_vi1' , title='Beverage categories', icon='mdi-liquor', type='table', fields=Model.field_s)
    def beverage_cat_vi1():
        @decore.dialog(title='Add Beverage category', icon='mdi-plus', activator='default')
        def beverage_cat_vi1_di1():
            @decore.widget(title='Add a Beverage category', type='form', fields=[Model.title])
            def beverage_cat_vi1_di1_wi1():
                @decore.action(type='submit', title='Submit Beverage category')
                def beverage_cat_vi1_di1_wi1_ac1(self, item:Model, **kwargs):
                    if item.save():
                        return True, item.title + ' was successfully added!'
                    else:
                        return False, 'Error!' + str(item.errors)