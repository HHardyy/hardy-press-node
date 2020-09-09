### Grid网格
- grid
- 网格
- 布局

网格布局就是指通过水平和垂直创建的一种模式，可以在这个模式上排列元素，网格通常具有行（row）和列（column）以及间隙（列跟列之间的距离，gutter）
#### fr布局单位
fr单位被用于在一系列长度值中分配剩余空间，如果多个已指定了多个部分，则剩下的空间根据各自的数字按比例分配。
#### repeat
CSS 函数表示轨道列表中的重复部分，它使得可以更紧凑地写入列和行重复。
#### demo
用网格创建一个布局，一行四列，每列等宽。
```html
<div class="wrapper">
    <div class="col">1</div>
    <div class="col">2</div>
    <div class="col">3</div>
    <div class="col">4</div>
    <div class="col">13</div>
    <div class="col span6">14</div>
    <div class="col span3">15</div>
    <div class="col span2">16</div>
</div>
```
```style
.wrapper {
    /* 转化元素类型 */
    display: grid;
    /* 设置网格的间隙 */
    grid-gap: 10px;
    /* 设置每列的尺寸 */
    grid-template-columns: repeat(4, 1fr);
}
```
repeat（4,1fr）的作用，创建4列等宽的网格，每列1fr他们所占的空间量相等。
#### 修改网格所占行与列
```css
修改列所占比重.span6 { grid-column: 2 / 4;} 
修改行所占比重：.span6 { grid-row: 2 / 4;}
```
##### grid-column
第一个单位 length，表示包含块的网格
第二个单位%，表示快的宽度
##### grid-row
第一个单位 length，表示包含块的网格
第二个单位%，表示快的高度。

[更详细网格布局可以看这篇文章](https://segmentfault.com/a/1190000020303331)