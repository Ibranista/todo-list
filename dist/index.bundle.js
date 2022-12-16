"use strict";(self.webpackChunktodo_list=self.webpackChunktodo_list||[]).push([[826],{852:(e,t,r)=>{function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var o=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,o=!(arguments.length>4&&void 0!==arguments[4])||arguments[4],i=!1,a="",s=(e=e.trim()).length;if(t&&e.length<=0)return{isError:i=!0,msg:a="This field is Required!"};if(r>0&&s<r)return{isError:i=!0,msg:a="The min character length of this field is ".concat(r)};if(n>0&&s>n)return{isError:i=!0,msg:a="The max character length of this field is ".concat(n)};if(!o){var c=e.replace(/\s/g,""),d=/^[A-Za-z][A-Za-z0-9-_.]*$/;if(!d.test(c))return{isError:i=!0,msg:a="This field is only allow A-z0-9_.- characters and also first character should be A-z"}}return{isError:i,msg:a}},i=document.getElementById("description"),a=document.querySelector(".show-msg"),s=document.querySelector(".btn-submit"),c=document.querySelector(".items-wrapper"),d=(document.querySelectorAll(".todo-des"),document.querySelector(".delete-completed"));const l=r.p+"images/three-dot-24.png",u=r.p+"images/trash-24.png";function m(e){return m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},m(e)}function f(e){return function(e){if(Array.isArray(e))return p(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return p(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?p(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function p(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function v(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,h(n.key),n)}}function g(e,t,r){return t&&v(e.prototype,t),r&&v(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e}function y(e,t,r){return(t=h(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function h(e){var t=function(e,t){if("object"!==m(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==m(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===m(t)?t:String(t)}var b=g((function e(){var t=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),y(this,"sortAndSave",(function(){var e=f(t.todos);e.sort((function(e,t){return e.index>t.index?1:e.index<t.index?-1:0}));var r=0;e.forEach((function(e){r+=1,e.index=r})),t.todos=f(e),localStorage.setItem("todos",JSON.stringify(t.todos))})),y(this,"render",(function(){c.innerHTML="",a.innerText="",a.classList.remove("form-error"),t.sortAndSave(),t.todos.length>0?t.todos.forEach((function(e){var r=document.createElement("li");r.id=e.index,r.className="todo-item",r.setAttribute("draggable",!0),r.addEventListener("dragstart",(function(){r.classList.add("dragging")})),r.addEventListener("dragend",(function(){r.classList.remove("dragging")}));var n=document.createElement("input");n.setAttribute("type","checkbox"),n.id="todo-compleate",n.addEventListener("change",(function(e){t.onCompleate(e)}));var o=document.createElement("p");o.className="todo-des",o.innerText=e.description,e.completed&&(n.setAttribute("checked","yes"),o.classList.add("todo-compleated"));var i=document.createElement("button");i.className="btn-three-dot",i.innerHTML='<img src="'.concat(l,'" alt="...">'),i.addEventListener("click",(function(e){t.onClickTodoDes(e)})),r.append(n,o,i),c.appendChild(r)})):c.innerHTML='<p class="no-item">No Items Added yet !</p>'})),y(this,"onSubmit",(function(){var e=i.value,r=o(e,!0,3,255,!1);if(!0===r.isError&&r.msg.length>=0)a.classList.add("form-error"),a.textContent=r.msg,i.classList.add("invalid");else{a.classList.remove("form-error"),a.textContent="",i.classList.remove("invalid"),i.value="";var n={description:e,completed:!1,index:t.todos.length+1||1};t.todos=[].concat(f(t.todos),[n]),t.render()}})),y(this,"delete",(function(e){t.todos=t.todos.filter((function(t){return t.index.toString()!==e})),t.render()})),y(this,"edit",(function(e){var r=e.target.value,n=o(r,!0,3,255,!1);if(!0===n.isError&&n.msg.length>0)a.classList.add("form-error"),a.textContent=n.msg,e.target.classList.add("invalid-edit");else{e.target.classList.remove("invalid-edit");var i=e.target.parentElement.id,s=f(t.todos),c=s.findIndex((function(e){return i===e.index.toString()}));c>=0&&(s[c].description=r),t.todos=f(s),t.render()}})),y(this,"onClickTodoDes",(function(e){var r=e.target.parentElement.parentElement,n=r.querySelector(".todo-des").innerText;r.innerHTML="";var o=document.createElement("input");o.setAttribute("type","checkbox"),o.id="todo-compleate",o.addEventListener("change",(function(e){t.onCompleate(e)}));var i=document.createElement("input");i.setAttribute("type","text"),i.setAttribute("value",n),i.className="todo-edit-input",i.addEventListener("keypress",(function(e){"Enter"===e.key?(e.preventDefault(),t.edit(e)):(a.classList.remove("form-error"),a.innerText="",e.target.classList.remove("invalid-edit"))}));var s=document.createElement("button");s.className="btn-delete",s.innerHTML='<img src="'.concat(u,'" alt="X">'),s.addEventListener("click",(function(){var e=r.id;t.delete(e)})),r.append(o,i,s)})),y(this,"onCompleate",(function(e){var r=e.target.parentElement.id,n=f(t.todos),o=n.findIndex((function(e){return r===e.index.toString()}));o>=0&&(n[o].completed=!n[o].completed),t.todos=f(n),t.render()})),y(this,"onFilterCompletedTodos",(function(){var e=f(t.todos);e=e.filter((function(e){return!0!==e.completed})),t.todos=f(e),t.render()})),localStorage.getItem("todos")?this.todos=JSON.parse(localStorage.getItem("todos")):this.todos=[]}));const E=r.p+"images/enter-24.png";var S=new b;i.addEventListener("keypress",(function(e){"Enter"===e.key?(e.preventDefault(),S.onSubmit()):(a.innerHTML="",a.classList.remove("form-error"),i.classList.remove("invalid"))})),s.addEventListener("click",(function(e){e.preventDefault(),S.onSubmit()})),d.addEventListener("click",(function(){S.onFilterCompletedTodos()})),c.addEventListener("dragover",(function(e){e.preventDefault();var t=function(e,t){return(r=e.querySelectorAll(".todo-item:not(.dragging)"),function(e){if(Array.isArray(e))return n(e)}(r)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(r)||function(e,t){if(e){if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}}(r)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).reduce((function(e,r){var n=r.getBoundingClientRect(),o=t-n.top-n.height/2;return o<0&&o>e.offset?{offset:o,element:r}:e}),{offset:Number.NEGATIVE_INFINITY}).element;var r}(c,e.clientY),r=c.querySelector(".dragging");null==r?c.appendChild(r):c.insertBefore(r,t)})),window.onload=function(){S.render(),document.querySelector(".btn-submit").innerHTML="<img src='".concat(E,"' alt='submit'/>")}}},e=>{e(e.s=852)}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QSxFQUFFMkIsaUJBQ0YsSUFBTVMsRUhVdUIsU0FBQ2pFLEVBQWVrRSxHQUc3QyxPLEVBRitCbEUsRUFBY0UsaUJBQWlCLDZCLGtuQkFFcENpRSxRQUFPLFNBQUNDLEVBQVNqQixHQUV6QyxJQUFNa0IsRUFBTWxCLEVBQUttQix3QkFHWEMsRUFBU0wsRUFBSUcsRUFBSUcsSUFBTUgsRUFBSUksT0FBUyxFQUMxQyxPQUFJRixFQUFTLEdBQUtBLEVBQVNILEVBQVFHLE9BQzFCLENBQUVBLE9BQUFBLEVBQVFHLFFBQVN2QixHQUVyQmlCLENBQ1QsR0FBRyxDQUFFRyxPQUFRSSxPQUFPQyxvQkFBcUJGLFEsS0FDM0MsQ0d4QmtDRyxDQUFnQjdFLEVBQWU2QixFQUFFaUQsU0FDM0RDLEVBQVcvRSxFQUFjRixjQUFjLGFBRTdCLE1BQVppRixFQUNGL0UsRUFBY3NDLFlBQVl5QyxHQUUxQi9FLEVBQWNnRixhQUFhRCxFQUFVZCxFQUV6QyxJQUVBZ0IsT0FBT0MsT0FBUyxXQUNkN0UsRUFBTXFDLFNBQ04vQyxTQUFTRyxjQUFjLGVBQWVrQixVQUFZLGFBQUgsT0FBZ0JtRSxFQUFTLG1CQUMxRSxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvZG9tU2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvdG9kb3MuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCB2YWxpZGF0ZUZvcm0gPSAoXHJcbiAgc3RyLCByZXF1aXJlZCA9IGZhbHNlLCBtaW5MZW5ndGggPSAwLCBtYXhMZW5ndGggPSAwLCBzcGVjaWFsQ2hhciA9IHRydWUsXHJcbikgPT4ge1xyXG4gIGxldCBpc0Vycm9yID0gZmFsc2U7XHJcbiAgbGV0IG1zZyA9ICcnO1xyXG4gIHN0ciA9IHN0ci50cmltKCk7XHJcbiAgY29uc3QgbGVuID0gc3RyLmxlbmd0aDtcclxuXHJcbiAgaWYgKHJlcXVpcmVkKSB7XHJcbiAgICBpZiAoc3RyLmxlbmd0aCA8PSAwKSB7XHJcbiAgICAgIGlzRXJyb3IgPSB0cnVlO1xyXG4gICAgICBtc2cgPSAnVGhpcyBmaWVsZCBpcyBSZXF1aXJlZCEnO1xyXG4gICAgICByZXR1cm4geyBpc0Vycm9yLCBtc2cgfTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGlmIChtaW5MZW5ndGggPiAwKSB7XHJcbiAgICBpZiAobGVuIDwgbWluTGVuZ3RoKSB7XHJcbiAgICAgIGlzRXJyb3IgPSB0cnVlO1xyXG4gICAgICBtc2cgPSBgVGhlIG1pbiBjaGFyYWN0ZXIgbGVuZ3RoIG9mIHRoaXMgZmllbGQgaXMgJHttaW5MZW5ndGh9YDtcclxuICAgICAgcmV0dXJuIHsgaXNFcnJvciwgbXNnIH07XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBpZiAobWF4TGVuZ3RoID4gMCkge1xyXG4gICAgaWYgKGxlbiA+IG1heExlbmd0aCkge1xyXG4gICAgICBpc0Vycm9yID0gdHJ1ZTtcclxuICAgICAgbXNnID0gYFRoZSBtYXggY2hhcmFjdGVyIGxlbmd0aCBvZiB0aGlzIGZpZWxkIGlzICR7bWF4TGVuZ3RofWA7XHJcbiAgICAgIHJldHVybiB7IGlzRXJyb3IsIG1zZyB9O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaWYgKCFzcGVjaWFsQ2hhcikge1xyXG4gICAgY29uc3QgbmV3U3RyID0gc3RyLnJlcGxhY2UoL1xccy9nLCAnJyk7XHJcbiAgICBjb25zdCByZSA9IC9eW0EtWmEtel1bQS1aYS16MC05LV8uXSokLztcclxuICAgIGlmICghcmUudGVzdChuZXdTdHIpKSB7XHJcbiAgICAgIGlzRXJyb3IgPSB0cnVlO1xyXG4gICAgICBtc2cgPSAnVGhpcyBmaWVsZCBpcyBvbmx5IGFsbG93IEEtejAtOV8uLSBjaGFyYWN0ZXJzIGFuZCBhbHNvIGZpcnN0IGNoYXJhY3RlciBzaG91bGQgYmUgQS16JztcclxuICAgICAgcmV0dXJuIHsgaXNFcnJvciwgbXNnIH07XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiB7IGlzRXJyb3IsIG1zZyB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldEFmdGVyRWxlbWVudCA9ICh0b2RvQ29udGFpbmVyLCB5KSA9PiB7XHJcbiAgY29uc3QgZHJhZ0ZpbHRlckVsZW1lbnRzID0gWy4uLnRvZG9Db250YWluZXIucXVlcnlTZWxlY3RvckFsbCgnLnRvZG8taXRlbTpub3QoLmRyYWdnaW5nKScpXTtcclxuXHJcbiAgcmV0dXJuIGRyYWdGaWx0ZXJFbGVtZW50cy5yZWR1Y2UoKG5lYXJlc3QsIGl0ZW0pID0+IHtcclxuICAgIC8vIGdldCB0aGUgYm94IGNvbnRlbnRcclxuICAgIGNvbnN0IGJveCA9IGl0ZW0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcblxyXG4gICAgLy8gY2FsY3VsYXRlIHRoZSBvZmZzZXRcclxuICAgIGNvbnN0IG9mZnNldCA9IHkgLSBib3gudG9wIC0gYm94LmhlaWdodCAvIDI7XHJcbiAgICBpZiAob2Zmc2V0IDwgMCAmJiBvZmZzZXQgPiBuZWFyZXN0Lm9mZnNldCkge1xyXG4gICAgICByZXR1cm4geyBvZmZzZXQsIGVsZW1lbnQ6IGl0ZW0gfTtcclxuICAgIH1cclxuICAgIHJldHVybiBuZWFyZXN0O1xyXG4gIH0sIHsgb2Zmc2V0OiBOdW1iZXIuTkVHQVRJVkVfSU5GSU5JVFkgfSkuZWxlbWVudDtcclxufTsiLCJleHBvcnQgY29uc3QgZm9ybUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkZXNjcmlwdGlvblwiKTtcclxuZXhwb3J0IGNvbnN0IHNob3dNc2cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNob3ctbXNnXCIpO1xyXG5leHBvcnQgY29uc3QgYnRuU3VibWl0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5idG4tc3VibWl0XCIpO1xyXG5leHBvcnQgY29uc3QgdG9kb0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaXRlbXMtd3JhcHBlclwiKTtcclxuZXhwb3J0IGNvbnN0IHRvZG9JdGVtc0RlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIudG9kby1kZXNcIik7XHJcbmV4cG9ydCBjb25zdCBmaWx0ZXJCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRlbGV0ZS1jb21wbGV0ZWRcIik7XHJcbiIsImltcG9ydCB7IHZhbGlkYXRlRm9ybSB9IGZyb20gXCIuL3V0aWxzLmpzXCI7XHJcbmltcG9ydCB7IHRvZG9Db250YWluZXIsIGZvcm1JbnB1dCwgc2hvd01zZyB9IGZyb20gXCIuL2RvbVNlbGVjdG9yLmpzXCI7XHJcblxyXG4vLyBJbXBvcnQgbmVjZXNzYXJ5IGFzc2V0cyBmb3JtIHNvdXJjZVxyXG5pbXBvcnQgdGhyZWVEb3RJY29uIGZyb20gXCIuLi9hc3NldHMvdGhyZWUtZG90LTI0LnBuZ1wiO1xyXG5pbXBvcnQgZGVsZXRlSWNvbiBmcm9tIFwiLi4vYXNzZXRzL3RyYXNoLTI0LnBuZ1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9kb3Mge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidG9kb3NcIikpIHtcclxuICAgICAgdGhpcy50b2RvcyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0b2Rvc1wiKSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnRvZG9zID0gW107XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzb3J0QW5kU2F2ZSA9ICgpID0+IHtcclxuICAgIGNvbnN0IHRvZG9BcnIgPSBbLi4udGhpcy50b2Rvc107XHJcbiAgICAvLyBzb3J0aW5nIHRoZSBsaXN0XHJcbiAgICB0b2RvQXJyLnNvcnQoKGEsIGIpID0+IHtcclxuICAgICAgaWYgKGEuaW5kZXggPiBiLmluZGV4KSB7XHJcbiAgICAgICAgcmV0dXJuIDE7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGEuaW5kZXggPCBiLmluZGV4KSB7XHJcbiAgICAgICAgcmV0dXJuIC0xO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiAwO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gcmVhcnJhbmdlIHRoZSBpbmRleFxyXG4gICAgbGV0IGluZGV4ID0gMDtcclxuICAgIHRvZG9BcnIuZm9yRWFjaCgodG9kbykgPT4ge1xyXG4gICAgICBpbmRleCArPSAxO1xyXG4gICAgICB0b2RvLmluZGV4ID0gaW5kZXg7XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLnRvZG9zID0gWy4uLnRvZG9BcnJdO1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0b2Rvc1wiLCBKU09OLnN0cmluZ2lmeSh0aGlzLnRvZG9zKSk7XHJcbiAgfTtcclxuXHJcbiAgLy8gUmVuZGVyIHRvZG8gbGlzdFxyXG4gIHJlbmRlciA9ICgpID0+IHtcclxuICAgIHRvZG9Db250YWluZXIuaW5uZXJIVE1MID0gXCJcIjtcclxuICAgIHNob3dNc2cuaW5uZXJUZXh0ID0gXCJcIjtcclxuICAgIHNob3dNc2cuY2xhc3NMaXN0LnJlbW92ZShcImZvcm0tZXJyb3JcIik7XHJcbiAgICB0aGlzLnNvcnRBbmRTYXZlKCk7XHJcbiAgICBpZiAodGhpcy50b2Rvcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgIHRoaXMudG9kb3MuZm9yRWFjaCgodG9kbykgPT4ge1xyXG4gICAgICAgIC8vIGNyZWF0ZSB0b2RvIGl0ZW1cclxuICAgICAgICBjb25zdCB0b2RvSXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcclxuICAgICAgICB0b2RvSXRlbS5pZCA9IHRvZG8uaW5kZXg7XHJcbiAgICAgICAgdG9kb0l0ZW0uY2xhc3NOYW1lID0gXCJ0b2RvLWl0ZW1cIjtcclxuICAgICAgICB0b2RvSXRlbS5zZXRBdHRyaWJ1dGUoXCJkcmFnZ2FibGVcIiwgdHJ1ZSk7XHJcblxyXG4gICAgICAgIC8vIGRyYWcgYW5kIGRyb3AgZnVuY3Rpb247XHJcbiAgICAgICAgdG9kb0l0ZW0uYWRkRXZlbnRMaXN0ZW5lcihcImRyYWdzdGFydFwiLCAoKSA9PiB7XHJcbiAgICAgICAgICB0b2RvSXRlbS5jbGFzc0xpc3QuYWRkKFwiZHJhZ2dpbmdcIik7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRvZG9JdGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJkcmFnZW5kXCIsICgpID0+IHtcclxuICAgICAgICAgIHRvZG9JdGVtLmNsYXNzTGlzdC5yZW1vdmUoXCJkcmFnZ2luZ1wiKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gdG9kbyBjaGVja2JveFxyXG4gICAgICAgIGNvbnN0IGNoZWNrYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gICAgICAgIGNoZWNrYm94LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJjaGVja2JveFwiKTtcclxuICAgICAgICBjaGVja2JveC5pZCA9IFwidG9kby1jb21wbGVhdGVcIjtcclxuXHJcbiAgICAgICAgY2hlY2tib3guYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCAoZSkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5vbkNvbXBsZWF0ZShlKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gdG9kbyBkZXNjcmlwdGlvblxyXG4gICAgICAgIGNvbnN0IHRvZG9EZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgICAgICB0b2RvRGVzLmNsYXNzTmFtZSA9IFwidG9kby1kZXNcIjtcclxuICAgICAgICB0b2RvRGVzLmlubmVyVGV4dCA9IHRvZG8uZGVzY3JpcHRpb247XHJcblxyXG4gICAgICAgIGlmICh0b2RvLmNvbXBsZXRlZCkge1xyXG4gICAgICAgICAgY2hlY2tib3guc2V0QXR0cmlidXRlKFwiY2hlY2tlZFwiLCBcInllc1wiKTtcclxuICAgICAgICAgIHRvZG9EZXMuY2xhc3NMaXN0LmFkZChcInRvZG8tY29tcGxlYXRlZFwiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIHRvZG8gVGhyZWUgZG90IGJ1dHRvblxyXG4gICAgICAgIGNvbnN0IHRocmVlRG90QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgICAgICB0aHJlZURvdEJ1dHRvbi5jbGFzc05hbWUgPSBcImJ0bi10aHJlZS1kb3RcIjtcclxuICAgICAgICB0aHJlZURvdEJ1dHRvbi5pbm5lckhUTUwgPSBgPGltZyBzcmM9XCIke3RocmVlRG90SWNvbn1cIiBhbHQ9XCIuLi5cIj5gO1xyXG5cclxuICAgICAgICAvLyBhZGQgZXZlbnQgb24gdGhyZWUgaWNvbiBmb3IgZWRpdCBhbmQgZGVsZXRlLlxyXG4gICAgICAgIHRocmVlRG90QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5vbkNsaWNrVG9kb0RlcyhlKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gQXBwZW5kIGFsbCB0aGUgdG9kbyBlbGVtZW50cyBpbnNpZGUgdGhlIHRvZG9JdGVtc1xyXG4gICAgICAgIHRvZG9JdGVtLmFwcGVuZChjaGVja2JveCwgdG9kb0RlcywgdGhyZWVEb3RCdXR0b24pO1xyXG5cclxuICAgICAgICAvLyBhcHBlbnQgdGhlIHRvZG8gaXRlbSBpbnNpZGUgdG9kb0NvbnRhaW5lclxyXG4gICAgICAgIHRvZG9Db250YWluZXIuYXBwZW5kQ2hpbGQodG9kb0l0ZW0pO1xyXG4gICAgICB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRvZG9Db250YWluZXIuaW5uZXJIVE1MID0gJzxwIGNsYXNzPVwibm8taXRlbVwiPk5vIEl0ZW1zIEFkZGVkIHlldCAhPC9wPic7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgLy8gb25TdWJtaXQgbWV0aG9kXHJcbiAgb25TdWJtaXQgPSAoKSA9PiB7XHJcbiAgICAvLyBWYWxpZGF0ZSB0aGUgZm9ybVxyXG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBmb3JtSW5wdXQudmFsdWU7XHJcbiAgICBjb25zdCByZXF1aXJlZCA9IHRydWU7XHJcbiAgICBjb25zdCBtaW5MZW5ndGggPSAzO1xyXG4gICAgY29uc3QgbWF4TGVuZ3RoID0gMjU1O1xyXG4gICAgY29uc3Qgc3BlY2lhbENoYXIgPSBmYWxzZTtcclxuICAgIGNvbnN0IGlzVmFsaWQgPSB2YWxpZGF0ZUZvcm0oXHJcbiAgICAgIGRlc2NyaXB0aW9uLFxyXG4gICAgICByZXF1aXJlZCxcclxuICAgICAgbWluTGVuZ3RoLFxyXG4gICAgICBtYXhMZW5ndGgsXHJcbiAgICAgIHNwZWNpYWxDaGFyXHJcbiAgICApO1xyXG5cclxuICAgIC8vIENoZWNrIGlmIGZvcm0gaGFzIGVycm9yIG9yIG5vdFxyXG5cclxuICAgIGlmIChpc1ZhbGlkLmlzRXJyb3IgPT09IHRydWUgJiYgaXNWYWxpZC5tc2cubGVuZ3RoID49IDApIHtcclxuICAgICAgc2hvd01zZy5jbGFzc0xpc3QuYWRkKFwiZm9ybS1lcnJvclwiKTtcclxuICAgICAgc2hvd01zZy50ZXh0Q29udGVudCA9IGlzVmFsaWQubXNnO1xyXG4gICAgICBmb3JtSW5wdXQuY2xhc3NMaXN0LmFkZChcImludmFsaWRcIik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAvLyBpZiBmb3JtIGlzIGVtcHR5IGFkZCBhIG5ldyB0b2RvXHJcbiAgICAgIHNob3dNc2cuY2xhc3NMaXN0LnJlbW92ZShcImZvcm0tZXJyb3JcIik7XHJcbiAgICAgIHNob3dNc2cudGV4dENvbnRlbnQgPSBcIlwiO1xyXG4gICAgICBmb3JtSW5wdXQuY2xhc3NMaXN0LnJlbW92ZShcImludmFsaWRcIik7XHJcbiAgICAgIGZvcm1JbnB1dC52YWx1ZSA9IFwiXCI7XHJcbiAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy50b2Rvcy5sZW5ndGggKyAxIHx8IDE7XHJcbiAgICAgIGNvbnN0IHRvZG8gPSB7XHJcbiAgICAgICAgZGVzY3JpcHRpb24sXHJcbiAgICAgICAgY29tcGxldGVkOiBmYWxzZSxcclxuICAgICAgICBpbmRleCxcclxuICAgICAgfTtcclxuICAgICAgdGhpcy50b2RvcyA9IFsuLi50aGlzLnRvZG9zLCB0b2RvXTtcclxuICAgICAgLy8gcmVuZGVyIHRoZSBuZXcgdG9kb3Mgb24gdGhlIGRvbVxyXG4gICAgICB0aGlzLnJlbmRlcigpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGRlbGV0ZSA9IChpbmRleCkgPT4ge1xyXG4gICAgdGhpcy50b2RvcyA9IHRoaXMudG9kb3MuZmlsdGVyKCh0KSA9PiB0LmluZGV4LnRvU3RyaW5nKCkgIT09IGluZGV4KTtcclxuICAgIHRoaXMucmVuZGVyKCk7XHJcbiAgfTtcclxuXHJcbiAgLy8gZWRpdCB0b2RvXHJcbiAgZWRpdCA9IChlKSA9PiB7XHJcbiAgICBjb25zdCB7IHZhbHVlIH0gPSBlLnRhcmdldDtcclxuXHJcbiAgICAvLyB2YWxpZGF0ZSBmb3JtXHJcbiAgICBjb25zdCByZXF1aXJlZCA9IHRydWU7XHJcbiAgICBjb25zdCBtaW5MZW5ndGggPSAzO1xyXG4gICAgY29uc3QgbWF4TGVuZ3RoID0gMjU1O1xyXG4gICAgY29uc3Qgc3BlY2lhbENoYXIgPSBmYWxzZTtcclxuICAgIGNvbnN0IGlzVmFsaWQgPSB2YWxpZGF0ZUZvcm0oXHJcbiAgICAgIHZhbHVlLFxyXG4gICAgICByZXF1aXJlZCxcclxuICAgICAgbWluTGVuZ3RoLFxyXG4gICAgICBtYXhMZW5ndGgsXHJcbiAgICAgIHNwZWNpYWxDaGFyXHJcbiAgICApO1xyXG4gICAgaWYgKGlzVmFsaWQuaXNFcnJvciA9PT0gdHJ1ZSAmJiBpc1ZhbGlkLm1zZy5sZW5ndGggPiAwKSB7XHJcbiAgICAgIHNob3dNc2cuY2xhc3NMaXN0LmFkZChcImZvcm0tZXJyb3JcIik7XHJcbiAgICAgIHNob3dNc2cudGV4dENvbnRlbnQgPSBpc1ZhbGlkLm1zZztcclxuICAgICAgZS50YXJnZXQuY2xhc3NMaXN0LmFkZChcImludmFsaWQtZWRpdFwiKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoXCJpbnZhbGlkLWVkaXRcIik7XHJcbiAgICAgIGNvbnN0IGluZGV4ID0gZS50YXJnZXQucGFyZW50RWxlbWVudC5pZDtcclxuICAgICAgY29uc3QgbmV3QXJyID0gWy4uLnRoaXMudG9kb3NdO1xyXG4gICAgICBjb25zdCBpbmR4ID0gbmV3QXJyLmZpbmRJbmRleCgoaXRlbSkgPT4gaW5kZXggPT09IGl0ZW0uaW5kZXgudG9TdHJpbmcoKSk7XHJcbiAgICAgIGlmIChpbmR4ID49IDApIHtcclxuICAgICAgICBuZXdBcnJbaW5keF0uZGVzY3JpcHRpb24gPSB2YWx1ZTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLnRvZG9zID0gWy4uLm5ld0Fycl07XHJcbiAgICAgIHRoaXMucmVuZGVyKCk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgLy8gb25DbGlja0RlcyBlbmVudCBtZXRob2RcclxuICBvbkNsaWNrVG9kb0RlcyA9IChlKSA9PiB7XHJcbiAgICAvLyB0YXJnZXQub3V0ZXJIVE1MID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcclxuICAgIGNvbnN0IHBhcmVudCA9IGUudGFyZ2V0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudDtcclxuICAgIGNvbnN0IGdldFRvdG9kZXMgPSBwYXJlbnQucXVlcnlTZWxlY3RvcihcIi50b2RvLWRlc1wiKS5pbm5lclRleHQ7XHJcbiAgICBwYXJlbnQuaW5uZXJIVE1MID0gXCJcIjtcclxuXHJcbiAgICAvLyB0b2RvIGNoZWNrYm94XHJcbiAgICBjb25zdCBjaGVja2JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICAgIGNoZWNrYm94LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJjaGVja2JveFwiKTtcclxuICAgIGNoZWNrYm94LmlkID0gXCJ0b2RvLWNvbXBsZWF0ZVwiO1xyXG5cclxuICAgIGNoZWNrYm94LmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgKGUpID0+IHtcclxuICAgICAgdGhpcy5vbkNvbXBsZWF0ZShlKTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIHRvZG8gZGVzY3JpcHRpb25cclxuICAgIGNvbnN0IHRvZG9FZGl0SW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgICB0b2RvRWRpdElucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJ0ZXh0XCIpO1xyXG4gICAgdG9kb0VkaXRJbnB1dC5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBnZXRUb3RvZGVzKTtcclxuICAgIHRvZG9FZGl0SW5wdXQuY2xhc3NOYW1lID0gXCJ0b2RvLWVkaXQtaW5wdXRcIjtcclxuXHJcbiAgICAvLyBBZGQgZXZlbnQgb24ga2V5cHJlc3MgaW4gdGhlIHRleHRhcmVhXHJcbiAgICB0b2RvRWRpdElucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlwcmVzc1wiLCAoZSkgPT4ge1xyXG4gICAgICBpZiAoZS5rZXkgPT09IFwiRW50ZXJcIikge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICB0aGlzLmVkaXQoZSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgc2hvd01zZy5jbGFzc0xpc3QucmVtb3ZlKFwiZm9ybS1lcnJvclwiKTtcclxuICAgICAgICBzaG93TXNnLmlubmVyVGV4dCA9IFwiXCI7XHJcbiAgICAgICAgZS50YXJnZXQuY2xhc3NMaXN0LnJlbW92ZShcImludmFsaWQtZWRpdFwiKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gdG9kbyBEZWxldGUgZG90IGJ1dHRvblxyXG4gICAgY29uc3QgZGVsZXRlVG9kbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICBkZWxldGVUb2RvLmNsYXNzTmFtZSA9IFwiYnRuLWRlbGV0ZVwiO1xyXG4gICAgZGVsZXRlVG9kby5pbm5lckhUTUwgPSBgPGltZyBzcmM9XCIke2RlbGV0ZUljb259XCIgYWx0PVwiWFwiPmA7XHJcblxyXG4gICAgLy8gYWRkaW5nIGV2ZW50IG9uIGRlbGV0ZSBpY29uXHJcbiAgICBkZWxldGVUb2RvLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgIGNvbnN0IGluZGV4ID0gcGFyZW50LmlkO1xyXG4gICAgICB0aGlzLmRlbGV0ZShpbmRleCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBwYXJlbnQuYXBwZW5kKGNoZWNrYm94LCB0b2RvRWRpdElucHV0LCBkZWxldGVUb2RvKTtcclxuICB9O1xyXG5cclxuICBvbkNvbXBsZWF0ZSA9IChlKSA9PiB7XHJcbiAgICBjb25zdCBpbmRleCA9IGUudGFyZ2V0LnBhcmVudEVsZW1lbnQuaWQ7XHJcbiAgICBjb25zdCBuZXdBcnIgPSBbLi4udGhpcy50b2Rvc107XHJcbiAgICBjb25zdCBpbmR4ID0gbmV3QXJyLmZpbmRJbmRleCgoaXRlbSkgPT4gaW5kZXggPT09IGl0ZW0uaW5kZXgudG9TdHJpbmcoKSk7XHJcbiAgICBpZiAoaW5keCA+PSAwKSB7XHJcbiAgICAgIG5ld0FycltpbmR4XS5jb21wbGV0ZWQgPSAhbmV3QXJyW2luZHhdLmNvbXBsZXRlZDtcclxuICAgIH1cclxuICAgIHRoaXMudG9kb3MgPSBbLi4ubmV3QXJyXTtcclxuICAgIHRoaXMucmVuZGVyKCk7XHJcbiAgfTtcclxuXHJcbiAgb25GaWx0ZXJDb21wbGV0ZWRUb2RvcyA9ICgpID0+IHtcclxuICAgIGxldCBuZXdBcnIgPSBbLi4udGhpcy50b2Rvc107XHJcbiAgICBuZXdBcnIgPSBuZXdBcnIuZmlsdGVyKChpdGVtKSA9PiBpdGVtLmNvbXBsZXRlZCAhPT0gdHJ1ZSk7XHJcbiAgICB0aGlzLnRvZG9zID0gWy4uLm5ld0Fycl07XHJcbiAgICB0aGlzLnJlbmRlcigpO1xyXG4gIH07XHJcbn1cclxuIiwiLyogZXNsaW50LWRpc2FibGUgbGluZWJyZWFrLXN0eWxlICovXHJcbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xyXG5pbXBvcnQgVG9kb3MgZnJvbSAnLi9tb2R1bGVzL3RvZG9zLmpzJztcclxuaW1wb3J0IHtcclxuICBmb3JtSW5wdXQsIGJ0blN1Ym1pdCwgc2hvd01zZywgZmlsdGVyQnV0dG9uLCB0b2RvQ29udGFpbmVyLFxyXG59IGZyb20gJy4vbW9kdWxlcy9kb21TZWxlY3Rvci5qcyc7XHJcblxyXG5pbXBvcnQgYXJyb3dJY29uIGZyb20gJy4vYXNzZXRzL2VudGVyLTI0LnBuZyc7XHJcbmltcG9ydCB7IGdldEFmdGVyRWxlbWVudCB9IGZyb20gJy4vbW9kdWxlcy91dGlscy5qcyc7XHJcblxyXG5jb25zdCB0b2RvcyA9IG5ldyBUb2RvcygpO1xyXG5cclxuZm9ybUlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXByZXNzJywgKGUpID0+IHtcclxuICBpZiAoZS5rZXkgPT09ICdFbnRlcicpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIHRvZG9zLm9uU3VibWl0KCk7XHJcbiAgfSBlbHNlIHtcclxuICAgIHNob3dNc2cuaW5uZXJIVE1MID0gJyc7XHJcbiAgICBzaG93TXNnLmNsYXNzTGlzdC5yZW1vdmUoJ2Zvcm0tZXJyb3InKTtcclxuICAgIGZvcm1JbnB1dC5jbGFzc0xpc3QucmVtb3ZlKCdpbnZhbGlkJyk7XHJcbiAgfVxyXG59KTtcclxuXHJcbmJ0blN1Ym1pdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gIHRvZG9zLm9uU3VibWl0KCk7XHJcbn0pO1xyXG5cclxuZmlsdGVyQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gIHRvZG9zLm9uRmlsdGVyQ29tcGxldGVkVG9kb3MoKTtcclxufSk7XHJcblxyXG50b2RvQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdvdmVyJywgKGUpID0+IHtcclxuICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgY29uc3QgZ2V0QWZ0ZXJFbGVtZW50UG9zaXRpb24gPSBnZXRBZnRlckVsZW1lbnQodG9kb0NvbnRhaW5lciwgZS5jbGllbnRZKTtcclxuICBjb25zdCBkcmFnZ2luZyA9IHRvZG9Db250YWluZXIucXVlcnlTZWxlY3RvcignLmRyYWdnaW5nJyk7XHJcblxyXG4gIGlmIChkcmFnZ2luZyA9PSBudWxsKSB7XHJcbiAgICB0b2RvQ29udGFpbmVyLmFwcGVuZENoaWxkKGRyYWdnaW5nKTtcclxuICB9IGVsc2Uge1xyXG4gICAgdG9kb0NvbnRhaW5lci5pbnNlcnRCZWZvcmUoZHJhZ2dpbmcsIGdldEFmdGVyRWxlbWVudFBvc2l0aW9uKTtcclxuICB9XHJcbn0pO1xyXG5cclxud2luZG93Lm9ubG9hZCA9ICgpID0+IHtcclxuICB0b2Rvcy5yZW5kZXIoKTtcclxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnRuLXN1Ym1pdCcpLmlubmVySFRNTCA9IGA8aW1nIHNyYz0nJHthcnJvd0ljb259JyBhbHQ9J3N1Ym1pdCcvPmA7XHJcbn07XHJcbiJdLCJuYW1lcyI6WyJ2YWxpZGF0ZUZvcm0iLCJzdHIiLCJyZXF1aXJlZCIsIm1pbkxlbmd0aCIsIm1heExlbmd0aCIsInNwZWNpYWxDaGFyIiwiaXNFcnJvciIsIm1zZyIsImxlbiIsInRyaW0iLCJsZW5ndGgiLCJuZXdTdHIiLCJyZXBsYWNlIiwicmUiLCJ0ZXN0IiwiZm9ybUlucHV0IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInNob3dNc2ciLCJxdWVyeVNlbGVjdG9yIiwiYnRuU3VibWl0IiwidG9kb0NvbnRhaW5lciIsImZpbHRlckJ1dHRvbiIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJUb2RvcyIsInRvZG9BcnIiLCJ0b2RvcyIsInNvcnQiLCJhIiwiYiIsImluZGV4IiwiZm9yRWFjaCIsInRvZG8iLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwiSlNPTiIsInN0cmluZ2lmeSIsImlubmVySFRNTCIsImlubmVyVGV4dCIsImNsYXNzTGlzdCIsInJlbW92ZSIsInNvcnRBbmRTYXZlIiwidG9kb0l0ZW0iLCJjcmVhdGVFbGVtZW50IiwiaWQiLCJjbGFzc05hbWUiLCJzZXRBdHRyaWJ1dGUiLCJhZGRFdmVudExpc3RlbmVyIiwiYWRkIiwiY2hlY2tib3giLCJlIiwib25Db21wbGVhdGUiLCJ0b2RvRGVzIiwiZGVzY3JpcHRpb24iLCJjb21wbGV0ZWQiLCJ0aHJlZURvdEJ1dHRvbiIsInRocmVlRG90SWNvbiIsIm9uQ2xpY2tUb2RvRGVzIiwiYXBwZW5kIiwiYXBwZW5kQ2hpbGQiLCJ2YWx1ZSIsImlzVmFsaWQiLCJ0ZXh0Q29udGVudCIsInJlbmRlciIsImZpbHRlciIsInQiLCJ0b1N0cmluZyIsInRhcmdldCIsInBhcmVudEVsZW1lbnQiLCJuZXdBcnIiLCJpbmR4IiwiZmluZEluZGV4IiwiaXRlbSIsInBhcmVudCIsImdldFRvdG9kZXMiLCJ0b2RvRWRpdElucHV0Iiwia2V5IiwicHJldmVudERlZmF1bHQiLCJlZGl0IiwiZGVsZXRlVG9kbyIsImRlbGV0ZUljb24iLCJnZXRJdGVtIiwidGhpcyIsInBhcnNlIiwib25TdWJtaXQiLCJvbkZpbHRlckNvbXBsZXRlZFRvZG9zIiwiZ2V0QWZ0ZXJFbGVtZW50UG9zaXRpb24iLCJ5IiwicmVkdWNlIiwibmVhcmVzdCIsImJveCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsIm9mZnNldCIsInRvcCIsImhlaWdodCIsImVsZW1lbnQiLCJOdW1iZXIiLCJORUdBVElWRV9JTkZJTklUWSIsImdldEFmdGVyRWxlbWVudCIsImNsaWVudFkiLCJkcmFnZ2luZyIsImluc2VydEJlZm9yZSIsIndpbmRvdyIsIm9ubG9hZCIsImFycm93SWNvbiJdLCJzb3VyY2VSb290IjoiIn0=