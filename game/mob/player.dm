/mob
	density = TRUE

/mob/player
	name = "Player"
	desc = "This is you, a player. You are dumb. "
	icon_state = "player"

/mob/player/Login()
	. = ..()
	src << "<h1>Login succesful as [src.ckey]</h1>"
	name = initial(name) 

/mob/npc
	name = "Non Playable Character"
	desc = "You can't play with or as me. "
	icon_state = "npc"