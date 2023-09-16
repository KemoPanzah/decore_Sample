import datetime

from decore_base.uniform.conform_model import *

from .test_foreign_model import Test_foreign_model
from .test_manytomany_model import Test_manytomany_model

class Test_model(Conform_model):
    boolean = BooleanField(verbose_name='Boolean', help_text='A field to store boolean values', default=False)
    char = CharField(verbose_name='Char', help_text="A field to store a char in database", default='Lorem ipsum dolor sit amet, consectetur adipiscing elit.')
    date = DateField(verbose_name='Date', help_text='A field to store a date in database', default=datetime.date.today)
    datetime = DateTimeField(verbose_name='DateTime', help_text='A field to store a datetime in database', default=datetime.datetime.now)
    float = FloatField(verbose_name='Float', help_text='A field to store a float in database', default=0.5)
    foreignkey = ForeignKeyField(verbose_name='ForeignKey', help_text='A field to store a foreignkey in database', model=Test_foreign_model, options_query={'options__eq': True})
    int = IntegerField(verbose_name='Integer', help_text='A field to store a integer in database')
    manytomany = ManyToManyField(model=Test_manytomany_model, backref='test_manytomany', verbose_name='ManyToMany', help_text='A field to store a manytomany in database', options_query={'options__eq': True})
    mm_backrefs = BackrefMetaField(help_text='A field to store manytomany backrefs in database', verbose_name='ManyToMany backrefs', options_query={'options__eq': True})
    text = TextField(verbose_name='Text', default='Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.')
    password = PasswordField(null=True, verbose_name='Password')