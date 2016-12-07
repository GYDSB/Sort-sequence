//插入排序

Array.prototype.insertSort=function () {
     //哨兵预存等待插入数据
     var tem=0;
     for(var i=1;i<=this.length;i++){
          if(this[i-1]>this[i]){
               tem=this[i];
               this[i]=this[i-1];
               for(var j=i-1;tem<this[j];j--)
                    this[j+1]=this[j];
               this[j+1]=tem;
          }
     }
}

//折半插入排序
Array.prototype.bInsertSort=function () {
     var tem=0;
     // console.log(this.length)
     for(var i=1;i<this.length;i++){
          tem=this[i];
          var low=0;
          var high=i-1;
          while(low<=high){
               var m=parseInt((low+high)/2);
               if(tem<this[m])high=m-1;
               else low=m+1;
          }
          for(var j=i-1;j>=high+1;j--){
               this[j+1]=this[j];
          }
          this[high+1]=tem;
     }
}

//希尔排序
Array.prototype.shellSort=function () {
     if (arguments.length<1)
          return;
     var dt=arguments[0];
     for (var k=0;k<dt.length;k++){
          for(var i=dt[k];i<this.length;i++){
               //在前置序列排好序后，仅需判断首位置是否有序，即可跳过本次排序。
               if(this[i]<this[i-dt[k]]){
                    var tem=this[i];
                    for(var j=i-dt[k];j>=0&&tem<this[j];j-=dt[k]){
                         this[j+dt[k]]=this[j];
                    }
                    this[j+dt[k]]=tem;
               }
          }
     }

}

//快速排序
Array.prototype.quickSort=function () {
     var self=this;
     var low=0;
     var high=self.length-1;
     function partition(self,low,high) {
          var pivotKey=self[low];
          while(low<high){
               while(low<high&&self[high]>=pivotKey)
                    high--;
               self[low]=self[high];
               while(low<high&&self[low]<=pivotKey)
                    low++;
               self[high]=self[low];
          }
          self[low]=pivotKey;
          return low;
     }
     function QSort(self,low,high) {
          if(low<high){
               var pivotLoc=partition(self,low,high);
               QSort(self,low,pivotLoc-1);
               QSort(self,pivotLoc+1,high);
          }
     }
     QSort(self,low,high);
}

//归并排序

//冒泡排序
Array.prototype.bubbleSort=function () {
     var size=this.length-1;
     var flag=1;
     while(size>0&&flag==1){
          flag=0;
          for(var i=0;i<=size;i++){
               if(this[i]>this[i+1]){
                    flag=1;
                    this[i]=this[i]+this[i+1];
                    this[i+1]=this[i]-this[i+1];
                    this[i]=this[i]-this[i+1];
               }
          }
          --size;
     }
}

//选择排序
Array.prototype.selectSort=function () {
     for(var i=0;i<this.length-1;i++){
          var k=i;
          for(var j=i+1;j<this.length;j++){
               if(this[j]<this[k])k=j;
          }
          if (k!=i){
               this[i]=this[i]+this[k];
               this[k]=this[i]-this[k];
               this[i]=this[i]-this[k];
          }
     }
}

//基数排序

//堆排序
var test=[];
for(var i=0;i<20;i++){
     test.push(parseInt(Math.random()*20));
}
test.selectSort();
console.log(test);