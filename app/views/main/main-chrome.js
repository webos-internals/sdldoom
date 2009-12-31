opus.Gizmo({
	name: "main",
	dropTarget: true,
	type: "Palm.Mojo.Panel",
	h: "100%",
	styles: {
		zIndex: 2
	},
	chrome: [
		{
			name: "header1",
			label: "WebOS Internals presents DOOM!",
			type: "Palm.Mojo.Header",
			l: 0,
			t: 0
		},
		{
			name: "html2",
			content: "To run DOOM!, you need to use\nPreware to install the Terminal\napplication, then launch Terminal\nand type these four commands\n(each line is a single command):\n<br/><br/>\ncd /media/cryptofs/apps<br/>\ncd usr/palm/applications<br/>\ncd org.webosinternals.sdldoom<br/>\n./doom &<br/>\n<br/>\nDOOM! will start in a new card.\n<br/><br/>\nWe will create a better launcher\nfor future versions of DOOM!",
			type: "Palm.Mojo.Html",
			l: "5",
			r: "5",
			w: null,
			t: 50,
			b: -1,
			h: null
		}
	]
});