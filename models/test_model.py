import datetime

from decore_base.uniform.conform_model import *

class Test_model(Conform_model):
    booleanfield = BooleanField(verbose_name='BooleanField', help_text='A field to store boolean values', default=False)
    charfield = CharField(verbose_name='CharField', help_text="A field to store a char in database", default='Lorem ipsum dolor sit amet, consectetur adipiscing elit.')
    datefield = DateField(verbose_name='DateField', help_text='A field to store a date in database', default=datetime.date.today)
    datetimefield = DateTimeField(verbose_name='DateTimeField', help_text='A field to store a datetime in database', default=datetime.datetime.now)
    intfield = IntegerField(verbose_name='IntegerField', default=0)
    textfield = TextField(verbose_name='TextField', default='Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.')
    passwordfield = PasswordField(null=True, verbose_name='PasswordField')