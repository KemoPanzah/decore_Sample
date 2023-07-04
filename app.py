# fmt: off
import sys, os
sys.path.append(os.path.abspath('../decore_Base'))
# fmt: on

from decore_base import decore
from bases import *


if __name__ == '__main__':
    @decore.app(title='Decore Sample Application')
    def main():
        pass