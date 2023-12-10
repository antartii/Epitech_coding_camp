#!/usr/bin/env python3

##
## EPITECH PROJECT, 2023
## christmas_camp_2023_python
## File description:
## correction python
##

import random

starters = ["foie gras", "caviar", "pain beurre", "saumon fumé", "saucisson"]
dishes = ["Dinde de noël", "Huitres", "Moules", "Coquille saint jacques gratiné", "Magret de canard"]
sides = ["Frites", "Haricot vert", "Pomme de terres", "Carottes", "pain", "purée"]
desserts = ["Buches de noël", "Tiramisu", "créme brulé", "Glace", "cheesecake"]
drinks = ["Water", "Coco colo", "orange juice", "chocolat chaud", "vin chaud"]
menu_list = [starters, dishes, sides, desserts, drinks]
menu_print = ["entrées :", "plats :", "side :","dessert :", "boissons :"]

for i in range(len(menu_list)):
    print(menu_print[i], random.choice(menu_list[i]))