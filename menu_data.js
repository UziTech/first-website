_menuCloseDelay=500           // The time delay for menus to remain visible on mouse out
_menuOpenDelay=150            // The time delay before menus open on mouse over
_followSpeed=5                // Follow scrolling speed
_followRate=40                // Follow scrolling Rate
_subOffsetTop=10              // Sub menu top offset
_subOffsetLeft=-10            // Sub menu left offset
_scrollAmount=3               // Only needed for Netscape 4.x
_scrollDelay=20               // Only needed for Netcsape 4.x



with(menuStyle=new mm_style()){
onbgcolor="#4F8EB6";
oncolor="#ffffff";
offbgcolor="#DCE9F0";
offcolor="#515151";
bordercolor="#296488";
borderstyle="solid";
borderwidth=1;
separatorcolor="#2D729D";
separatorsize="1";
padding=5;
fontsize="75%";
fontstyle="normal";
fontfamily="Verdana, Tahoma, Arial";
pagecolor="black";
pagebgcolor="#82B6D7";
headercolor="#000000";
headerbgcolor="#ffffff";
subimage="arrow.gif";
subimagepadding="2";
overfilter="Fade(duration=0.2);Alpha(opacity=90);Shadow(color='#777777', Direction=135, Strength=5)";
outfilter="randomdissolve(duration=0.3)";
}


with(milonic=new menuname("Main Menu")){
style=menuStyle;
top=10;
left=10;
alwaysvisible=1;
aI("text=Home;url=http://www.angelfire.com/mn3/thatguy/tony.html/;status=Tony's Place;");
aI("text=Computer Languages;showmenu=Lang;status=Learn Computer Languages;");
aI("text=Games;showmenu=Games;status=Play Games;");
aI("text=Guest Book;showmenu=GBook;status=Sign and View My Guest Book;");
aI("text=Links;showmenu=Links;status=Links To Kewl Webpages;");
aI("text=Other;showmenu=Other;status=Misc.;");
}

with(milonic=new menuname("Lang")){
style=menuStyle;
overflow="scroll";
aI("text=Java Script;url=http://www.angelfire.com/mn3/thatguy/java/;status=Learn Javascript;target=main;");
aI("text=HTML;url=http://www.angelfire.com/mn3/thatguy/html.html;status=Learn HTML;target=main;");
}

with(milonic=new menuname("Games")){
style=menuStyle;
aI("text=Product Purchasing Page;url=http://www.angelfire.com/mn3/thatguy/funpage.html;status=ThE FuN PaGe;target=main;");
}

with(milonic=new menuname("GBook")){
style=menuStyle;
aI("text=Sing My Guest Book;url=http://www.angelfire.com/mn3/thatguy/guest.html;status=Sign My Guest Book;target=main;");
aI("text=View My Guest Book;url=http://htmlgear.lycos.com/guest/control.guest?u=tonybrix&i=1&a=view;status=View My Guest Book;target=parent;");
}

with(milonic=new menuname("Links")){
style=menuStyle;
aI("text=Despair.Com;url=http://www.despair.com;status=Funniest Page Ever;target=parent;");
aI("text=Slicerace.Com;url=http://www.slicerace.com;status=Cool Page;target=parent;");
aI("text=DumbLaws.Com;url=http://www.dumblaws.com;status=Funny Page;target=parent;");
}

with(milonic=new menuname("Other")){
style=menuStyle;
margin=20;
aI("text=Instant Messages;url=#;onclick="expandingWindow('http://www.angelfire.com/mn3/thatguy/comments.html');return false";status=;");
aI("text=E-Mail Me;url=Mailto:c2z232f@yahoo.com?subject=suggestions;status=C2Z232F@YAHOO.COM;");
aI("text=Book Mark Us;url=#;onclick="addbookmark();return false";status=Book Mark Us;");
}

drawMenus();
