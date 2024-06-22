from decore_base import decore

@decore.base(title='BeerShop', icon='mdi-beer')
class Beershop:
    @decore.view(title="Dashboard", icon="mdi-view-dashboard", type="default")
    def dashboard():
        pass