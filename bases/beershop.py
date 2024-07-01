from decore_base import decore

@decore.base(title='BeerShop', icon='mdi-beer')
class Beershop:
    
    @decore.dialog(parent_id='app', title='About', icon='mdi-information-outline')
    def about():
        @decore.widget(title='About', icon='mdi-information-outline')
        def about_wi1():
            pass

    @decore.view(title="Dashboard", icon="mdi-view-dashboard", type="default")
    def dashboard():
        pass