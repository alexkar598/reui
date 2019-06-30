


/datum/reui/window
	var/html_buffer

/datum/reui/window/proc/ClearBuffer()
	html_buffer = ""

/datum/reui/window/proc/RepopulateHtml()
	ClearBuffer()

