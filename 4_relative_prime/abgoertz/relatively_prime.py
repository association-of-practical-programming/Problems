from math import gcd
from functools import reduce

def find_common_factors(numbers):
    common_factor = reduce(gcd, numbers)
    return common_factor if common_factor != 1 else True

with open("input.txt", "r") as f:
    for line in f:
        nums = list(map(int, line.split(' ')))
        print(find_common_factors(nums))
