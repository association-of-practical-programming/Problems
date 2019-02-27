import math

def find_common_factors(numbers):
    common_factor = numbers[0]
    for n in numbers[1:]:
        common_factor = math.gcd(n, common_factor)

    return common_factor if common_factor != 1 else True

with open("input.txt", "r") as f:
    for line in f:
        nums = list(map(int, line.split(' ')))
        print(find_common_factors(nums))
