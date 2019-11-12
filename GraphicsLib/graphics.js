function putpixel(x, y, canvas_name, color_name)
{
	var c = document.getElementById(canvas_name);
	var ctx = c.getContext("2d");
	ctx.fillStyle = color_name;
	ctx.fillRect(x, y, 1, 1);
}