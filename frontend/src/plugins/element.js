import Vue from 'vue'
import {
    Button, Form, FormItem, Input, Radio, RadioGroup, RadioButton,
    Message, Container, Header, Aside, Main, Carousel, CarouselItem,
    Menu, Submenu, MenuItemGroup, MenuItem, Row, Col, Cascader, Table,
    TableColumn, Tag, MessageBox, Scrollbar, Divider, Link, Breadcrumb,
    BreadcrumbItem, Tabs, TabPane, Image, Switch, Dialog, Upload, DatePicker,
    Select, Option, Loading, Dropdown, DropdownMenu, DropdownItem
} from 'element-ui'

Vue.use(Button)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Radio)
Vue.use(RadioGroup)
Vue.use(RadioButton)
Vue.prototype.$message = Message
Vue.use(Container)
Vue.use(Header)
Vue.use(Aside)
Vue.use(Main)
Vue.use(Carousel)
Vue.use(CarouselItem)
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItemGroup)
Vue.use(MenuItem)
Vue.use(Row)
Vue.use(Col)
Vue.use(Cascader)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Tag)
Vue.prototype.$alert = MessageBox.alert
Vue.prototype.$confirm = MessageBox.confirm
Vue.use(Scrollbar)
Vue.use(Divider)
Vue.use(Link)
Vue.use(Breadcrumb)
Vue.use(BreadcrumbItem)
Vue.use(Tabs)
Vue.use(TabPane)
Vue.use(Image)
Vue.use(Switch)
Vue.use(Dialog)
Vue.use(Upload)
Vue.use(DatePicker)
Vue.use(Select)
Vue.use(Option)
Vue.use(Loading)
Vue.use(Dropdown)
Vue.use(DropdownMenu)
Vue.use(DropdownItem)
