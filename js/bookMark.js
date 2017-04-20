var BookMark = function(){
	var me = this;
	me.bindEvent = function(){
		$('.book_mark').on('click',function(){
			$('#mark_title_box').fadeOut();
		});
	}
	return me;
}