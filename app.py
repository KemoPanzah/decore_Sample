# fmt: off
import sys, os
sys.path.append(os.path.abspath('../'))
from uniform_base import uniform
# fmt: on

# TODO - app 'continue' mode - start flask api in thread and trigger main() function. Dokumentation des Verhaltens. 
if __name__ == '__main__':
    @uniform.app(p_title='Uniform Sample Application')
    def main():
        pass