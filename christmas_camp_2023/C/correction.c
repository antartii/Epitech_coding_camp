#include <stdlib.h>
#include <stdio.h>
#include <time.h>

// calcul combien de jour il reste avant Noël et l'affiche
int main(int argc, char **argv)
{
    int jour = 0;
    int jour_manquant = 0;

    srand(time(NULL)); // init the rand() functions
    jour = rand() % 25 + 1; // random between 1 to 25
    jour_manquant = 25 - jour; //days left

    //show everything
    printf("Nous sommes le %d Décembre\n", jour);
    printf("Il reste donc %d jours avant Noël\n", jour_manquant);
    return 0;
}

/*
pseudo-code :
    jour = random entre 1 à 25
    jour_manquant = 25 - jour

    afficher = "Nous sommes le [jour] Décembre"
    afficher = "Il reste donc [jour_manquant] jours avant Noël\n"
    fin du programe
*/