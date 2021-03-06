if(!lt.util.load.provided_QMARK_('lt.plugins.gitbeam.util')) {
goog.provide('lt.plugins.gitbeam.util');
goog.require('cljs.core');
goog.require('lt.objs.files');
goog.require('lt.objs.tabs');
goog.require('clojure.string');
goog.require('lt.objs.proc');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.command');
goog.require('lt.objs.files');
goog.require('clojure.string');
goog.require('lt.objs.editor');
goog.require('lt.objs.proc');
goog.require('lt.objs.tabs');
goog.require('lt.objs.editor');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.command');
/**
* @param {...*} var_args
*/
lt.plugins.gitbeam.util.sh = (function() { 
var sh__delegate = function (cmd,args){var vec__7927 = ((cljs.core.map_QMARK_.call(null,cljs.core.last.call(null,args)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.butlast.call(null,args),cljs.core.last.call(null,args)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [args,cljs.core.PersistentArrayMap.EMPTY], null));var args__$1 = cljs.core.nth.call(null,vec__7927,0,null);var options = cljs.core.nth.call(null,vec__7927,1,null);var stdout_fn = (function (){var or__6371__auto__ = new cljs.core.Keyword(null,"stdout","stdout",4416474557).cljs$core$IFn$_invoke$arity$1(options);if(cljs.core.truth_(or__6371__auto__))
{return or__6371__auto__;
} else
{return ((function (or__6371__auto__,vec__7927,args__$1,options){
return (function (stdout){if(cljs.core.seq.call(null,stdout))
{return cljs.core.println.call(null,"STDOUT: ",stdout);
} else
{return null;
}
});
;})(or__6371__auto__,vec__7927,args__$1,options))
}
})();return require("child_process").execFile(cmd,cljs.core.clj__GT_js.call(null,(function (){var or__6371__auto__ = args__$1;if(cljs.core.truth_(or__6371__auto__))
{return or__6371__auto__;
} else
{return cljs.core.PersistentVector.EMPTY;
}
})()),cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,options,new cljs.core.Keyword(null,"stdout","stdout",4416474557))),((function (vec__7927,args__$1,options,stdout_fn){
return (function (err,stdout,stderr){stdout_fn.call(null,stdout);
if(cljs.core.seq.call(null,stderr))
{cljs.core.println.call(null,"STDERR: ",stderr);
cljs.core.prn.call(null,"ERR:",err);
} else
{}
if(cljs.core.truth_(new cljs.core.Keyword(null,"callback","callback",841683895).cljs$core$IFn$_invoke$arity$1(options)))
{return new cljs.core.Keyword(null,"callback","callback",841683895).cljs$core$IFn$_invoke$arity$1(options).call(null);
} else
{return null;
}
});})(vec__7927,args__$1,options,stdout_fn))
);
};
var sh = function (cmd,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return sh__delegate.call(this,cmd,args);};
sh.cljs$lang$maxFixedArity = 1;
sh.cljs$lang$applyTo = (function (arglist__7936){
var cmd = cljs.core.first(arglist__7936);
var args = cljs.core.rest(arglist__7936);
return sh__delegate(cmd,args);
});
sh.cljs$core$IFn$_invoke$arity$variadic = sh__delegate;
return sh;
})()
;
lt.plugins.gitbeam.util.get_git_root = (function get_git_root(path){return lt.objs.files.parent.call(null,lt.objs.files.walk_up_find.call(null,path,".git"));
});
lt.plugins.gitbeam.util.get_cwd = (function get_cwd(){return lt.objs.files.parent.call(null,new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",1017141280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.objs.editor.pool.last_active.call(null)))));
});
/**
* Same as lt.objs.proc/capture but takes shell options e.g. :cwd and gives back stderr to callback.
*/
lt.plugins.gitbeam.util.capture = (function capture(cmd,vars,cb,sh_opts){return require("child_process").exec([cljs.core.str(cmd),cljs.core.str(" && "),cljs.core.str(lt.objs.proc.var_caps.call(null,vars))].join(''),cljs.core.clj__GT_js.call(null,sh_opts),(function (err,out,stderr){return cb.call(null,cljs.core.zipmap.call(null,vars,clojure.string.split.call(null,out,";")),stderr);
}));
});
/**
* Returns current word given string and cursor position in string
*/
lt.plugins.gitbeam.util.current_word_STAR_ = (function current_word_STAR_(string,cursor){return [cljs.core.str(cljs.core.re_find.call(null,/\S+$/,cljs.core.subs.call(null,string,0,cursor))),cljs.core.str(cljs.core.re_find.call(null,/\S+/,cljs.core.subs.call(null,string,cursor)))].join('');
});
/**
* Current word under cursor
*/
lt.plugins.gitbeam.util.current_word = (function current_word(){var temp__4092__auto__ = lt.objs.editor.pool.last_active.call(null);if(cljs.core.truth_(temp__4092__auto__))
{var ed = temp__4092__auto__;var cursor = lt.objs.editor.__GT_cursor.call(null,ed);return lt.plugins.gitbeam.util.current_word_STAR_.call(null,lt.objs.editor.line.call(null,ed,new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(cursor)),new cljs.core.Keyword(null,"ch","ch",1013907415).cljs$core$IFn$_invoke$arity$1(cursor));
} else
{return null;
}
});
/**
* Opens url with internal browser in a second tabset
*/
lt.plugins.gitbeam.util.tabset_open = (function tabset_open(url){var pre_commands = (((cljs.core.count.call(null,new cljs.core.Keyword(null,"tabsets","tabsets",3756175576).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.objs.tabs.multi))) < 2))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tabset.new","tabset.new",1444331601)], null):cljs.core.PersistentVector.EMPTY);var commands = cljs.core.into.call(null,pre_commands,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"add-browser-tab","add-browser-tab",3663273910),new cljs.core.Keyword(null,"tabs.move-next-tabset","tabs.move-next-tabset",3557293229),new cljs.core.Keyword(null,"browser.url-bar.focus","browser.url-bar.focus",3353788299),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"browser.url-bar.navigate!","browser.url-bar.navigate!",1014303491),url], null),new cljs.core.Keyword(null,"browser.focus-content","browser.focus-content",1148241840)], null));var seq__7932 = cljs.core.seq.call(null,commands);var chunk__7933 = null;var count__7934 = 0;var i__7935 = 0;while(true){
if((i__7935 < count__7934))
{var c = cljs.core._nth.call(null,chunk__7933,i__7935);if(cljs.core.coll_QMARK_.call(null,c))
{cljs.core.apply.call(null,lt.objs.command.exec_BANG_,c);
} else
{lt.objs.command.exec_BANG_.call(null,c);
}
{
var G__7937 = seq__7932;
var G__7938 = chunk__7933;
var G__7939 = count__7934;
var G__7940 = (i__7935 + 1);
seq__7932 = G__7937;
chunk__7933 = G__7938;
count__7934 = G__7939;
i__7935 = G__7940;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__7932);if(temp__4092__auto__)
{var seq__7932__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7932__$1))
{var c__7119__auto__ = cljs.core.chunk_first.call(null,seq__7932__$1);{
var G__7941 = cljs.core.chunk_rest.call(null,seq__7932__$1);
var G__7942 = c__7119__auto__;
var G__7943 = cljs.core.count.call(null,c__7119__auto__);
var G__7944 = 0;
seq__7932 = G__7941;
chunk__7933 = G__7942;
count__7934 = G__7943;
i__7935 = G__7944;
continue;
}
} else
{var c = cljs.core.first.call(null,seq__7932__$1);if(cljs.core.coll_QMARK_.call(null,c))
{cljs.core.apply.call(null,lt.objs.command.exec_BANG_,c);
} else
{lt.objs.command.exec_BANG_.call(null,c);
}
{
var G__7945 = cljs.core.next.call(null,seq__7932__$1);
var G__7946 = null;
var G__7947 = 0;
var G__7948 = 0;
seq__7932 = G__7945;
chunk__7933 = G__7946;
count__7934 = G__7947;
i__7935 = G__7948;
continue;
}
}
} else
{return null;
}
}
break;
}
});
}
if(!lt.util.load.provided_QMARK_('lt.plugins.gitbeam.github')) {
goog.provide('lt.plugins.gitbeam.github');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('clojure.string');
/**
* Matches against user/repo and optional path
*/
lt.plugins.gitbeam.github.repo_path_regex = /(?:github\.com\/|git@github\.com:)([^\/]+\/[^\/]+)(.*)?$/;
lt.plugins.gitbeam.github.get_path_and_lines = (function get_path_and_lines(path){var vec__7854 = cljs.core.re_find.call(null,/([^#]+)(?:#L(\d+)(?:-L(\d+)|$))?/,path);var _ = cljs.core.nth.call(null,vec__7854,0,null);var path__$1 = cljs.core.nth.call(null,vec__7854,1,null);var from_line = cljs.core.nth.call(null,vec__7854,2,null);var to_line = cljs.core.nth.call(null,vec__7854,3,null);var from_line__$1 = parseInt(from_line);var to_line__$1 = parseInt(to_line);if(cljs.core.truth_((function (){var and__6359__auto__ = from_line__$1;if(cljs.core.truth_(and__6359__auto__))
{return to_line__$1;
} else
{return and__6359__auto__;
}
})()))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [path__$1,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"from","from",1017056028),from_line__$1,new cljs.core.Keyword(null,"to","to",1013907949),to_line__$1], null)], null);
} else
{if(cljs.core.truth_(from_line__$1))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [path__$1,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"from","from",1017056028),from_line__$1,new cljs.core.Keyword(null,"to","to",1013907949),from_line__$1], null)], null);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [path__$1,null], null);
} else
{return null;
}
}
}
});
lt.plugins.gitbeam.github.get_commit_and_path = (function get_commit_and_path(url){var G__7856 = url;var G__7856__$1 = (((G__7856 == null))?null:cljs.core.re_find.call(null,lt.plugins.gitbeam.github.repo_path_regex,G__7856));var G__7856__$2 = (((G__7856__$1 == null))?null:cljs.core.last.call(null,G__7856__$1));var G__7856__$3 = (((G__7856__$2 == null))?null:cljs.core.re_find.call(null,/\/[^\/]+\/([^\/]+)\/(.*)/,G__7856__$2));var G__7856__$4 = (((G__7856__$3 == null))?null:cljs.core.rest.call(null,G__7856__$3));return G__7856__$4;
});
lt.plugins.gitbeam.github.get_project_name = (function get_project_name(url){return cljs.core.second.call(null,cljs.core.re_find.call(null,lt.plugins.gitbeam.github.repo_path_regex,url));
});
lt.plugins.gitbeam.github.build_url = (function build_url(base_url,commit,relative_url){return [cljs.core.str(base_url),cljs.core.str("/blob/"),cljs.core.str(commit),cljs.core.str("/"),cljs.core.str(relative_url)].join('');
});
lt.plugins.gitbeam.github.git_remote__GT_url = (function git_remote__GT_url(git_remote){return clojure.string.replace.call(null,git_remote,/^git@github.com:/,"https://github.com/");
});
lt.plugins.gitbeam.github.build_line_selection = (function build_line_selection(from,to){if(cljs.core._EQ_.call(null,from,to))
{return [cljs.core.str("#L"),cljs.core.str(from)].join('');
} else
{return [cljs.core.str("#L"),cljs.core.str(from),cljs.core.str("-"),cljs.core.str("L"),cljs.core.str(to)].join('');
}
});
}
if(!lt.util.load.provided_QMARK_('lt.plugins.gitbeam.in')) {
goog.provide('lt.plugins.gitbeam.in$');
goog.require('cljs.core');
goog.require('lt.objs.files');
goog.require('lt.object');
goog.require('lt.objs.statusbar');
goog.require('lt.plugins.gitbeam.github');
goog.require('lt.objs.platform');
goog.require('clojure.string');
goog.require('lt.objs.workspace');
goog.require('lt.objs.notifos');
goog.require('lt.objs.notifos');
goog.require('lt.objs.workspace');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.command');
goog.require('lt.objs.platform');
goog.require('lt.objs.files');
goog.require('lt.objs.statusbar');
goog.require('lt.plugins.gitbeam.github');
goog.require('clojure.string');
goog.require('lt.objs.editor');
goog.require('lt.object');
goog.require('lt.objs.editor');
goog.require('lt.plugins.gitbeam.util');
goog.require('lt.plugins.gitbeam.util');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.command');
lt.plugins.gitbeam.in$.clone_dir = lt.objs.files.home.call(null,".gitbeam");
lt.plugins.gitbeam.in$.select_lines = (function select_lines(from,to){var temp__4092__auto__ = lt.objs.editor.pool.last_active.call(null);if(cljs.core.truth_(temp__4092__auto__))
{var ed = temp__4092__auto__;return lt.objs.editor.set_selection.call(null,ed,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"line","line",1017226086),(from - 1),new cljs.core.Keyword(null,"ch","ch",1013907415),0], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"line","line",1017226086),(to - 1),new cljs.core.Keyword(null,"ch","ch",1013907415),lt.objs.editor.line_length.call(null,ed,(to - 1))], null));
} else
{return null;
}
});
lt.plugins.gitbeam.in$.open_path = (function open_path(path){var vec__7900 = lt.plugins.gitbeam.github.get_path_and_lines.call(null,path);var path__$1 = cljs.core.nth.call(null,vec__7900,0,null);var lines = cljs.core.nth.call(null,vec__7900,1,null);if(cljs.core.truth_(lt.objs.files.file_QMARK_.call(null,path__$1)))
{lt.objs.command.exec_BANG_.call(null,new cljs.core.Keyword(null,"open-path","open-path",2513940794),path__$1);
if(cljs.core.truth_(lines))
{return lt.plugins.gitbeam.in$.select_lines.call(null,new cljs.core.Keyword(null,"from","from",1017056028).cljs$core$IFn$_invoke$arity$1(lines),new cljs.core.Keyword(null,"to","to",1013907949).cljs$core$IFn$_invoke$arity$1(lines));
} else
{return null;
}
} else
{return lt.objs.notifos.set_msg_BANG_.call(null,[cljs.core.str(path__$1),cljs.core.str(" is not a valid file to open")].join(''));
}
});
lt.plugins.gitbeam.in$.add_folder = (function add_folder(url,repo_dir){lt.object.raise.call(null,lt.objs.workspace.current_ws,new cljs.core.Keyword(null,"add.folder!","add.folder!",2151595160),repo_dir);
lt.objs.notifos.done_working.call(null,[cljs.core.str("Successfully added folder "),cljs.core.str(repo_dir)].join(''));
var temp__4092__auto__ = lt.plugins.gitbeam.github.get_commit_and_path.call(null,url);if(cljs.core.truth_(temp__4092__auto__))
{var vec__7902 = temp__4092__auto__;var commit = cljs.core.nth.call(null,vec__7902,0,null);var relative_path = cljs.core.nth.call(null,vec__7902,1,null);return lt.plugins.gitbeam.util.sh.call(null,"git","checkout",commit,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cwd","cwd",1014003170),repo_dir,new cljs.core.Keyword(null,"callback","callback",841683895),cljs.core.partial.call(null,lt.plugins.gitbeam.in$.open_path,lt.objs.files.join.call(null,repo_dir,relative_path))], null));
} else
{return null;
}
});
lt.plugins.gitbeam.in$.git_clone = (function git_clone(clone_url,url,repo_dir){lt.objs.notifos.set_msg_BANG_.call(null,[cljs.core.str("Cloning "),cljs.core.str(clone_url)].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"timeout","timeout",3994960083),30000], null));
lt.objs.statusbar.loader_inc.call(null);
return lt.plugins.gitbeam.util.sh.call(null,"git","clone",clone_url,repo_dir,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"callback","callback",841683895),cljs.core.partial.call(null,lt.plugins.gitbeam.in$.add_folder,url,repo_dir)], null));
});
lt.plugins.gitbeam.in$.add_repo = (function add_repo(url,basename){var repo_dir = lt.objs.files.join.call(null,lt.plugins.gitbeam.in$.clone_dir,clojure.string.replace.call(null,basename,"/","_"));if(cljs.core.truth_(lt.objs.files.exists_QMARK_.call(null,repo_dir)))
{lt.objs.notifos.working.call(null,[cljs.core.str("Updating "),cljs.core.str(repo_dir)].join(''));
return lt.plugins.gitbeam.util.sh.call(null,"git","pull",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cwd","cwd",1014003170),repo_dir,new cljs.core.Keyword(null,"callback","callback",841683895),cljs.core.partial.call(null,lt.plugins.gitbeam.in$.add_folder,url,repo_dir)], null));
} else
{return lt.plugins.gitbeam.in$.git_clone.call(null,cljs.core.re_find.call(null,cljs.core.re_pattern.call(null,[cljs.core.str(".*"),cljs.core.str(basename)].join('')),url),url,repo_dir);
}
});
lt.plugins.gitbeam.in$.clone_project = (function clone_project(url){if(cljs.core.truth_(lt.objs.files.exists_QMARK_.call(null,lt.plugins.gitbeam.in$.clone_dir)))
{} else
{lt.objs.files.mkdir.call(null,lt.plugins.gitbeam.in$.clone_dir);
}
var temp__4090__auto__ = lt.plugins.gitbeam.github.get_project_name.call(null,url);if(cljs.core.truth_(temp__4090__auto__))
{var basename = temp__4090__auto__;return lt.plugins.gitbeam.in$.add_repo.call(null,url,basename);
} else
{return lt.objs.notifos.set_msg_BANG_.call(null,[cljs.core.str(url),cljs.core.str(" is not a clonable url. Please try again.")].join(''));
}
});
lt.plugins.gitbeam.in$.in_with_clipboard = (function in_with_clipboard(){return lt.plugins.gitbeam.in$.clone_project.call(null,lt.objs.platform.paste.call(null));
});
lt.plugins.gitbeam.in$.in_with_current_word = (function in_with_current_word(){return lt.plugins.gitbeam.in$.clone_project.call(null,lt.plugins.gitbeam.util.current_word.call(null));
});
}
if(!lt.util.load.provided_QMARK_('lt.plugins.gitbeam.out')) {
goog.provide('lt.plugins.gitbeam.out');
goog.require('cljs.core');
goog.require('lt.objs.files');
goog.require('lt.plugins.gitbeam.github');
goog.require('lt.objs.platform');
goog.require('clojure.string');
goog.require('lt.objs.notifos');
goog.require('lt.objs.notifos');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.command');
goog.require('lt.objs.platform');
goog.require('lt.objs.files');
goog.require('lt.plugins.gitbeam.github');
goog.require('clojure.string');
goog.require('lt.objs.editor');
goog.require('lt.objs.editor');
goog.require('lt.plugins.gitbeam.util');
goog.require('lt.plugins.gitbeam.util');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.command');
lt.plugins.gitbeam.out.git_remote__GT_base_url = (function git_remote__GT_base_url(git_remote){return clojure.string.replace.call(null,lt.plugins.gitbeam.github.git_remote__GT_url.call(null,clojure.string.trim_newline.call(null,git_remote)),/\.git$/,"");
});
lt.plugins.gitbeam.out.selected_lines = (function selected_lines(){var temp__4092__auto__ = lt.objs.editor.pool.last_active.call(null);if(cljs.core.truth_(temp__4092__auto__))
{var ed = temp__4092__auto__;if(cljs.core.truth_(lt.objs.editor.selection_QMARK_.call(null,ed)))
{var selection = lt.objs.editor.selection_bounds.call(null,ed);var from = (parseInt(cljs.core.get_in.call(null,selection,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"from","from",1017056028),new cljs.core.Keyword(null,"line","line",1017226086)], null))) + 1);var to = (parseInt(cljs.core.get_in.call(null,selection,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"to","to",1013907949),new cljs.core.Keyword(null,"line","line",1017226086)], null))) + 1);return lt.plugins.gitbeam.github.build_line_selection.call(null,from,to);
} else
{return null;
}
} else
{return null;
}
});
lt.plugins.gitbeam.out.build_url = (function build_url(remote,commit){var base_url = lt.plugins.gitbeam.out.git_remote__GT_base_url.call(null,cljs.core.second.call(null,cljs.core.re_find.call(null,/origin\t(\S+)/,remote)));var relative_path = [cljs.core.str(lt.objs.files.relative.call(null,lt.plugins.gitbeam.util.get_git_root.call(null,lt.plugins.gitbeam.util.get_cwd.call(null)),new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",1017141280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.objs.editor.pool.last_active.call(null)))))),cljs.core.str(lt.plugins.gitbeam.out.selected_lines.call(null))].join('');return lt.plugins.gitbeam.github.build_url.call(null,base_url,commit,relative_path);
});
lt.plugins.gitbeam.out.process_git_commands = (function process_git_commands(url_fn,p__7861,stderr){var map__7863 = p__7861;var map__7863__$1 = ((cljs.core.seq_QMARK_.call(null,map__7863))?cljs.core.apply.call(null,cljs.core.hash_map,map__7863):map__7863);var commit = cljs.core.get.call(null,map__7863__$1,"COMMIT");var remote = cljs.core.get.call(null,map__7863__$1,"REMOTE");if(cljs.core.truth_((function (){var and__6359__auto__ = commit;if(cljs.core.truth_(and__6359__auto__))
{return remote;
} else
{return and__6359__auto__;
}
})()))
{return url_fn.call(null,lt.plugins.gitbeam.out.build_url.call(null,remote,commit));
} else
{console.log("STDERR:",stderr);
return lt.objs.notifos.set_msg_BANG_.call(null,"Unable to acquire all git information necessary to open a url.");
}
});
lt.plugins.gitbeam.out.out_with = (function out_with(url_fn){return lt.plugins.gitbeam.util.capture.call(null,"REMOTE=`git remote -v`;COMMIT=`git rev-parse HEAD`",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["REMOTE","COMMIT"], null),cljs.core.partial.call(null,lt.plugins.gitbeam.out.process_git_commands,url_fn),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cwd","cwd",1014003170),lt.plugins.gitbeam.util.get_git_root.call(null,lt.plugins.gitbeam.util.get_cwd.call(null))], null));
});
lt.plugins.gitbeam.out.out_with_external_browser = cljs.core.partial.call(null,lt.plugins.gitbeam.out.out_with,lt.objs.platform.open);
lt.plugins.gitbeam.out.out_with_clipboard_copy = cljs.core.partial.call(null,lt.plugins.gitbeam.out.out_with,lt.objs.platform.copy);
lt.plugins.gitbeam.out.out_with_internal_browser = cljs.core.partial.call(null,lt.plugins.gitbeam.out.out_with,lt.plugins.gitbeam.util.tabset_open);
}
if(!lt.util.load.provided_QMARK_('lt.plugins.gitbeam')) {
goog.provide('lt.plugins.gitbeam');
goog.require('cljs.core');
goog.require('lt.plugins.gitbeam.out');
goog.require('lt.plugins.gitbeam.out');
goog.require('lt.plugins.gitbeam.in$');
goog.require('lt.plugins.gitbeam.in$');
goog.require('lt.objs.command');
goog.require('lt.objs.command');
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"gitbeam.in-with-current-word","gitbeam.in-with-current-word",3573002908),new cljs.core.Keyword(null,"desc","desc",1016984067),"gitbeam: open project using url under cursor",new cljs.core.Keyword(null,"exec","exec",1017031683),lt.plugins.gitbeam.in$.in_with_current_word], null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"gitbeam.in-with-clipboard","gitbeam.in-with-clipboard",2974254140),new cljs.core.Keyword(null,"desc","desc",1016984067),"gitbeam: open project using clipboard url",new cljs.core.Keyword(null,"exec","exec",1017031683),lt.plugins.gitbeam.in$.in_with_clipboard], null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"gitbeam.out-with-external-browser","gitbeam.out-with-external-browser",4120174163),new cljs.core.Keyword(null,"desc","desc",1016984067),"gitbeam: opens current file on github with external browser",new cljs.core.Keyword(null,"exec","exec",1017031683),lt.plugins.gitbeam.out.out_with_external_browser], null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"gitbeam.out-with-clipboard-copy","gitbeam.out-with-clipboard-copy",2842434361),new cljs.core.Keyword(null,"desc","desc",1016984067),"gitbeam: copies to clipboard github url equivalent of current file",new cljs.core.Keyword(null,"exec","exec",1017031683),lt.plugins.gitbeam.out.out_with_clipboard_copy], null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"gitbeam.out-with-internal-browser","gitbeam.out-with-internal-browser",4182388549),new cljs.core.Keyword(null,"desc","desc",1016984067),"gitbeam: opens current file on github with internal browser",new cljs.core.Keyword(null,"exec","exec",1017031683),lt.plugins.gitbeam.out.out_with_internal_browser], null));
}

//# sourceMappingURL=gitbeam_compiled.js.map