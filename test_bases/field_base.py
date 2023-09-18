from decore_base import decore

from test_models.field_model import Field_model as Model

@decore.base(title='Field Base', icon='mdi-soccer-field', model=Model)
class Field_base:
    @decore.view(title='Field last', icon='mdi-tune', type='table', parent_id='Test_base', fields=[Model.boolean, Model.char, Model.date, Model.datetime,Model.float,Model.foreignkey, Model.fk_backrefs ,Model.int, Model.manytomany, Model.mm_backrefs ,Model.text, Model.password])
    def tfb_vi1():
        @decore.dialog(title='Field test dialog', icon='mdi-tune', type='standard', display='drawer', activator='none')
        def tfb_vi1_di1():
            @decore.widget(title='Field form', icon='mdi-tune', type='form', fields=[Model.boolean, Model.char, Model.date, Model.datetime,Model.float,Model.foreignkey, Model.fk_backrefs, Model.int, Model.manytomany, Model.mm_backrefs ,Model.text, Model.password])
            def tfb_vi1_di1_wi1():
                @decore.action(title='Submit', type='submit', icon='mdi-tune')
                def tfb_vi1_di1_wi1_ac1(self, item:Model, **kwargs):
                    item.title = 'Test_item'
                    if item.save():
                        return True, 'Success'
                    else:
                        return False, 'Error'
    
    @decore.view(title='Field table', icon='mdi-table', type='table', parent_id='Test_base', fields=[Model.boolean, Model.char, Model.date, Model.datetime,Model.float,Model.foreignkey, Model.fk_backrefs, Model.int, Model.manytomany, Model.mm_backrefs ,Model.text, Model.password], filters=[Model.boolean, Model.char, Model.date, Model.datetime,Model.float,Model.foreignkey, Model.fk_backrefs, Model.int, Model.manytomany, Model.mm_backrefs ,Model.text, Model.password])
    def tfb_vi2():
        @decore.dialog(title='Add field data', icon='mdi-table', type='standard', display='drawer', activator='default')
        def tfb_vi2_di1():
            @decore.widget(title='Field form', icon='mdi-table', type='form', fields=[Model.boolean, Model.char, Model.date, Model.datetime,Model.float,Model.foreignkey, Model.fk_backrefs, Model.int, Model.manytomany, Model.mm_backrefs ,Model.text, Model.password])
            def tfb_vi2_di1_wi1():
                @decore.action(title='Submit', type='submit', icon='mdi-table')
                def tfb_vi2_di1_wi1_ac1(self, item:Model, **kwargs):
                    item.title = 'Test_item'
                    item.save()
                    return True, 'Success'
        
        @decore.dialog(title='Edit field data', icon='mdi-table', type='standard', display='drawer', activator='context')
        def tfb_vi2_di2():
            @decore.widget(title='Field form', icon='mdi-table', type='form', fields=[Model.boolean, Model.char, Model.date, Model.datetime,Model.float,Model.foreignkey, Model.fk_backrefs, Model.int, Model.manytomany, Model.mm_backrefs ,Model.text, Model.password])
            def tfb_vi2_di2_wi1():
                @decore.action(title='Submit', type='submit', icon='mdi-table')
                def tfb_vi2_di2_wi1_ac1(self, item:Model, **kwargs):
                    item.title = 'Test_item'
                    item.save()
                    return True, 'Success'
                
        @decore.dialog(title='Edit field data', icon='mdi-table', type='standard', display='drawer', activator='click')
        def tfb_vi2_di3():
            @decore.widget(title='Field form', icon='mdi-table', type='info', fields=[Model.boolean, Model.char, Model.date, Model.datetime,Model.float,Model.foreignkey, Model.fk_backrefs, Model.int, Model.manytomany, Model.mm_backrefs ,Model.text, Model.password])
            def tfb_vi2_di3_wi1():
                pass