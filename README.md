# unit-4-game

Psuedo-code

When the game initializes there must be 4 heroes available to select.
Clicking on any hero will:
1. Change the background color of the selected card.
2. Move the remaining 3 cards to the next line.
3. Prevent this card from being clickable again.

The three remaining heroes will be available for selection as the enemy.
Clicking on any hero will:
1. Move this hero to the next line.
2. Change the background color of the selected card.
3. Prevent all cards from being selectable.
4. Activate the attack button. (change the color/etc...)

Clicking the now-activated attack button:
1. Perform the attack protocol.
    a. Deal damage to the opponent
    b. += hero's attack damage.
    c. Activate the opponent's counter-attack.
2. Check for hero !> 0 health.
    a. If hero !> 0 health, end game, restart, losses +1
    b. If hero > 0 health, continue.
3. Check for opponent !> 0 health.
    a. If opponent !> 0 health, loop to opponent choice.
    b. If opponent > 0 health, continue.
    c. If opponent !> 0 health, and no opponent available: end game, restart, wins +1. 