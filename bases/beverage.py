from decore_base import decore

from models.beverage_model import Beverage_model as Model


@decore.base(title='Beverage', icon='mdi-liquor', model=Model)
class Beverage:
    @decore.view(parent_id='Beershop', title='Beverages', icon='mdi-liquor', type='table', fields=Model.field_s, filters=[Model.beverage_cat])
    def beverage_vi1():
        @decore.dialog(title='Add Beverage', icon='mdi-plus', activator='default')
        def beverage_vi1_di1():
            @decore.widget(title='Add a Beverage', type='form', fields=[Model.title, Model.beverage_cat, Model.beverage_type])
            def beverage_vi1_di1_wi1():
                @decore.action(type='submit', title='Submit Beverage')
                def beverage_vi1_di1_wi1_ac1(self, item:Model, **kwargs):
                    if item.save():
                        return True, item.title + ' was successfully added!'
                    else:
                        return False, 'Error!' + str(item.errors)
