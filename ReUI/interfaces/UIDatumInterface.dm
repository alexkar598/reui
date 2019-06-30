#define REUI_OPTION_NORMAL 0
#define REUI_OPTION_BORDER 1
#define REUI_OPTION_NOCLOSE 2
#define REUI_OPTION_NORESIZE 4
#define REUI_OPTION_NOMINIMIZE 8
#define REUI_OPTION_NOTITLEBAR 16

/datum/reui/window
	var/title = "No title set" //window title(if titlebar is enabled)
	var/height = 300 //height of the window
	var/width = 300 //width of the window
	var/options = REUI_OPTION_NORMAL //options bitflag,can accept: 
										//REUI_OPTION_NORMAL
										//REUI_OPTION_BORDER
										//REUI_OPTION_NOCLOSE
										//REUI_OPTION_NORESIZE
										//REUI_OPTION_NOMINIMIZE
										//REUI_OPTION_NOTITLEBAR
										//via the syntax options = REUI_OPTION_BORDER | REUI_OPTION_NOMINIMIZE | REUI_OPTION_NOCLOSE
										//using REUI_OPTION_NOTITLEBAR automatically disables closing and minimizing

/datum/reui/window/proc/ApplyStyleSheet()
	return
	//this function needs to return either null,an empty string or an HTML <style> tag