(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{378:function(v,_,t){v.exports=t.p+"assets/img/image-20240921230307068.cf80d300.png"},460:function(v,_,t){"use strict";t.r(_);var a=t(8),s=Object(a.a)({},(function(){var v=this,_=v._self._c;return _("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[_("h2",{attrs:{id:"一、知识补充"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#一、知识补充"}},[v._v("#")]),v._v(" 一、知识补充：")]),v._v(" "),_("p",[_("img",{attrs:{src:t(378),alt:"image-20240921230307068"}})]),v._v(" "),_("ul",[_("li",[v._v("用户编写好C语言程序")]),v._v(" "),_("li",[v._v("寄存器获取C语言程序，将其转换成二进制")]),v._v(" "),_("li",[v._v("将二进制存储进内存中")]),v._v(" "),_("li",[v._v("内存获取到二进制数据后，将二进制的地址交给CPU控制器中的地址寄存器")]),v._v(" "),_("li",[v._v("控制器控制单元，读取地址寄存器。根据地址去内存中获取指令")]),v._v(" "),_("li",[v._v("控制器控制单元，将指令放到其指令寄存器中")]),v._v(" "),_("li",[v._v("控制器，读取指令寄存器中的指令")]),v._v(" "),_("li",[v._v("控制器在读取指令寄存器中的指令时，有5中主要的情形\n"),_("ul",[_("li",[v._v("立即寻址：控制单元读取指令寄存器的时候，发现指令里面直接包含了操作操作内从")]),v._v(" "),_("li",[v._v("直接寻址：控制单元读取指令寄存器中的指令，根据指令去内存中获取到对应的数据，然后将数据存储到其数据寄存器中")]),v._v(" "),_("li",[v._v("寄存器寻址：控制单元读取指令寄存器中的指令，根据指令直接去数据寄存器中寻找操作数")]),v._v(" "),_("li",[v._v("寄存器间接寻址：控制单元读取指令寄存器中的指令，根据指令去数据寄存器中获取，发现是一个地址，然后又去另外的一个数据寄存器中获取操作数据")]),v._v(" "),_("li",[v._v("间接寻址：控制单元读取指令寄存器中的指令，根据指令去内存中获取操作数，发现是一个地址，然后根据地址又去内存中寻找对应的操作数")])])])]),v._v(" "),_("h2",{attrs:{id:"二、立即寻址"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#二、立即寻址"}},[v._v("#")]),v._v(" 二、立即寻址")]),v._v(" "),_("p",[v._v("操作数直接包含在指令中。例如，指令 "),_("code",[v._v("ADD R1, #5")]),v._v(" 中的 "),_("code",[v._v("#5")]),v._v(" 就是立即数。")]),v._v(" "),_("h2",{attrs:{id:"三、直接寻址"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#三、直接寻址"}},[v._v("#")]),v._v(" 三、直接寻址")]),v._v(" "),_("p",[v._v("指令中包含操作数的内存地址。CPU根据这个地址直接访问内存中的数据。例如，"),_("code",[v._v("LOAD R1, 1000")]),v._v(" 表示将地址 1000 处的值加载到 R1。")]),v._v(" "),_("h2",{attrs:{id:"四、寄存器寻址"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#四、寄存器寻址"}},[v._v("#")]),v._v(" 四、寄存器寻址")]),v._v(" "),_("p",[v._v("操作数存储在寄存器中，指令直接指定寄存器。例如，"),_("code",[v._v("ADD R1, R2")]),v._v(" 表示将 R2 的值加到 R1 中。")]),v._v(" "),_("h2",{attrs:{id:"五、寄存器间接寻址"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#五、寄存器间接寻址"}},[v._v("#")]),v._v(" 五、寄存器间接寻址")]),v._v(" "),_("p",[v._v("指令指定一个寄存器，寄存器中存储的是一个地址。CPU首先读取这个地址，然后去访问该地址处的操作数。例如，指令 "),_("code",[v._v("LOAD R1, (R2)")]),v._v(" 表示从 R2 指向的地址加载数据到 R1。")]),v._v(" "),_("h2",{attrs:{id:"六、间接寻址"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#六、间接寻址"}},[v._v("#")]),v._v(" 六、间接寻址")]),v._v(" "),_("p",[v._v("与寄存器间接寻址类似，但可以是内存中的地址。指令中包含一个地址，该地址指向另一个地址，CPU根据第二个地址访问数据。例如，"),_("code",[v._v("LOAD R1, (1000)")]),v._v(" 表示从地址 1000 中存储的地址加载数据到 R1。")])])}),[],!1,null,null,null);_.default=s.exports}}]);