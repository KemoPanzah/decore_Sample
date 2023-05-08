from uniform_base import uniform as uf
from uniform_base.classes import Uniform_base as Base
from models.company_model import Company_model as Model

@uf.base(p_title='Companies', p_model=Model)
class Company_base(Base):
    
    @uf.widget(p_parent_id='per_vi1_di1_wi1', p_title='Companies', p_type='table', p_active_s=Model.field_s)
    def per_vi1_di1_wi1_wi2():
        pass