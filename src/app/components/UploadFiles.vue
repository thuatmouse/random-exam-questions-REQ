<template>
  <div id='upload-file' v-loading="loading">
    <div style="text-align: left"><a @click="downloadFile()" style="text-decoration: underline; cursor: pointer">Download file</a></div>
    <br/>
    <input type='file' id='fileUpload' />
    <hr />
    <el-button size="small" type="success" @click="uploadFiles()">Upload File&nbsp;<i class="el-icon-upload el-icon-right"></i></el-button>
    <hr />
    <div id='dvExcel'></div>

    <div v-if="isQuestions">
      <div class="question">
        <el-row style="text-align: center; text-align: center; font-size: 20px; font-family: Times New Roman;">
          <el-col :span="8">
            <div><strong>TRƯỜNG CAO ĐẲNG CƠ ĐIỆN</strong></div>
            <div><strong>VÀ XÂY DỰNG BẮC NINH</strong></div>
          </el-col>
          <el-col :span="8" :offset="8">
            <div><strong>ĐỀ KIỂM TRA KẾT THÚC</strong></div>
            <div><strong>MÔN HỌC (MÔ-ĐUN)</strong></div>
          </el-col>
        </el-row>
        <br>
        <span style="margin-right: 30px"><b>Môn: Vẽ kỹ thuật ngành may</b></span><span><b>Trình độ: </b>Trung cấp</span>
        <hr>
        <el-tabs type="card" @tab-click="handleClick" :value="currentTab">
          <el-tab-pane :label="langs[key]" :name="key" v-for="(array, key, index) in data" :key="index + 1">
            <div v-for="(item, index) in data[currentTab]" :key="index">
              <h2>Câu hỏi {{ index + 1 }}</h2>
              <p>{{ item.q }}</p>
              <div v-if="item.s.indexOf('2.3.41') !== -1" class="image"><img src="https://storage.bigmax.vn/upload/888888/16052019/c57bf1b2-44ff-42e1-9313-b0d0bc9a000e.png"></div>
              <div v-if="item.s.indexOf('2.3.42') !== -1" class="image"><img src="https://storage.bigmax.vn/upload/888888/16052019/1b775892-39f8-4b63-91e3-40c03a5640f0.png"></div>
              <div v-if="item.s.indexOf('2.3.43') !== -1" class="image"><img src="https://storage.bigmax.vn/upload/888888/16052019/f69d0ad9-be82-40d2-8cb7-5bdcfabdf99e.png"></div>
              <div v-if="item.s.indexOf('2.3.44') !== -1" class="image"><img src="https://storage.bigmax.vn/upload/888888/16052019/f4c64c6d-a6de-4ff5-94d0-baf64b1ce38d.png"></div>
              <div v-if="item.s.indexOf('2.3.45') !== -1" class="image"><img src="https://storage.bigmax.vn/upload/888888/16052019/ee2be2bd-5a82-4fe8-8502-be4bdd2e0119.png"></div>
              <div v-if="item.s.indexOf('2.3.52') !== -1" class="image"><img src="https://storage.bigmax.vn/upload/888888/16052019/bdf2d623-7559-43fd-b62e-9d5b6862b14d.png"></div>
              <div v-if="item.s.indexOf('2.3.60') !== -1" class="image"><img src="https://storage.bigmax.vn/upload/888888/16052019/d430be40-cd66-458b-af02-635c84ff4bb0.png"></div>
              <div v-if="item.s.indexOf('2.3.61') !== -1" class="image"><img src="https://storage.bigmax.vn/upload/888888/16052019/483dc83c-6e60-4ec6-948a-1fc1ce2b01df.png"></div>
              <div v-if="item.s.indexOf('2.3.62') !== -1" class="image"><img src="https://storage.bigmax.vn/upload/888888/16052019/748465dc-e482-49df-b976-5973a39d8be1.png"></div>
              <div v-if="item.s.indexOf('3.3.71') !== -1" class="image"><img src="https://storage.bigmax.vn/upload/888888/16052019/1a530d45-5a90-474e-bfb3-f6e736ac70d4.png"></div>
              <div v-if="item.s.indexOf('3.3.74') !== -1" class="image"><img src="https://storage.bigmax.vn/upload/888888/16052019/e7602742-9872-4e61-a2d9-d49c745faa4d.png"></div>
              <div v-if="item.s.indexOf('3.3.75') !== -1" class="image"><img src="https://storage.bigmax.vn/upload/888888/16052019/c7df107a-4e04-47c1-a29f-8b5c730f16fb.png"></div>
              <div v-if="item.s.indexOf('3.3.84') !== -1" class="image"><img src="https://storage.bigmax.vn/upload/888888/16052019/1bb09409-3a86-4945-b49a-ba63539d4046.png"></div>
              <div v-if="item.s.indexOf('3.3.87') !== -1" class="image"><img src="https://storage.bigmax.vn/upload/888888/16052019/4d7215ee-5abb-46fc-b2a3-47f20a9b9cfd.png"></div>
              <div v-if="item.s.indexOf('3.3.88') !== -1" class="image"><img src="https://storage.bigmax.vn/upload/888888/16052019/e849b815-fd35-4cea-9219-9f0c5adbb0e4.png"></div>
              <div v-if="item.s.indexOf('3.3.89') !== -1" class="image"><img src="https://storage.bigmax.vn/upload/888888/16052019/69b72f6c-99f2-45a9-9017-20ffec938e4b.png"></div>
              <div v-if="item.s.indexOf('3.3.90') !== -1" class="image"><img src="https://storage.bigmax.vn/upload/888888/16052019/dc7109a7-409a-462e-b235-77a3463996f6.png"></div>
              <div v-if="item.s.indexOf('4.3.91') !== -1" class="image"><img src="https://storage.bigmax.vn/upload/888888/16052019/b9103e32-4791-425f-beb9-d08f43a07c71.png"></div>
              <div v-if="item.s.indexOf('4.3.92') !== -1" class="image"><img src="https://storage.bigmax.vn/upload/888888/16052019/d7c88c6b-7386-4f80-8e2f-aeb62f66fd20.png"></div>
              <div v-if="item.s.indexOf('4.3.93') !== -1" class="image"><img src="https://storage.bigmax.vn/upload/888888/16052019/46a541c1-8c3a-4b86-94e9-b9b59e34528d.png"></div>
              <div v-if="item.s.indexOf('4.3.94') !== -1" class="image"><img src="https://storage.bigmax.vn/upload/888888/16052019/1001c4e0-f4e5-4b93-8683-3fd02b62a097.png"></div>
              <div v-if="item.s.indexOf('4.3.95') !== -1" class="image"><img src="https://storage.bigmax.vn/upload/888888/16052019/03847925-8506-4425-8945-f2154af14b18.png"></div>
              <div v-if="item.s.indexOf('4.3.96') !== -1" class="image"><img src="https://storage.bigmax.vn/upload/888888/16052019/14c4ffae-3b82-41f1-aaf0-088c79a704ba.png"></div>
              <div v-if="item.s.indexOf('4.3.97') !== -1" class="image"><img src="https://storage.bigmax.vn/upload/888888/16052019/1e486d61-b544-4747-b395-fab5ebe87e4a.png"></div>
              <div v-if="item.s.indexOf('4.3.98') !== -1" class="image"><img src="https://storage.bigmax.vn/upload/888888/16052019/73abf8a8-bcdc-418e-b555-991aa31817b7.png"></div>
              <div v-if="item.s.indexOf('4.3.99') !== -1" class="image"><img src="https://storage.bigmax.vn/upload/888888/16052019/732944bd-3943-47d8-9a22-a7eb55a44262.png"></div>
              <div v-if="item.s.indexOf('4.3.100') !== -1" class="image"><img src="https://storage.bigmax.vn/upload/888888/16052019/b4c1bbc6-92ec-4656-a2ef-e662c9e99a93.png"></div>
              <el-radio v-for="s in item.A" :key="s">{{ s }}</el-radio>
            </div>
          </el-tab-pane>
        </el-tabs>
      </div>
    </div>
  </div>
</template>

<script>

function RandomX(e) {
  return Math.floor(Math.random() * e.length)
}

export default {
  name: 'uploadFiles',
  data() {
    return {
      action: `${window.location.protocol}//${window.location.hostname}:8081/getFile/`,
      baseUrl: `${window.location.protocol}//${window.location.hostname}:8081/getFile/`,
      isQuestions: false,
      data: {
        de1: [],
        de2: [],
        de3: []
      },
      langs: {
        'de1': 'Đề 1',
        'de2': 'Đề 2',
        'de3': 'Đề 3'
      },
      currentTab: 'de1',
      loading: false
    }
  },

  methods: {
    downloadFile () {
      window.location = 'getFile/storage/default.xlsx'
    },
    ProcessExcel (data) {
      // Read the Excel File data.
      var workbook = XLSX.read(data, {
        type: 'binary'
      })

      // Fetch the name of First Sheet.
      var firstSheet = workbook.SheetNames[0]

      // Read all rows from First Sheet into an JSON array.
      var excelRows = XLSX.utils.sheet_to_row_object_array(workbook.Sheets[firstSheet])
      var row = workbook.Sheets[firstSheet]
      excelRows.splice(0, 7)
      var lst = []
      try {
        delete row['!ref']
      } catch (error) {

      }
      for (var i = 1; i < 11; i++) {
        delete row['A' + i]
        delete row['B' + i]
        delete row['C' + i]
      }
      var f // flag check D/A
      for (let key in row) {

        if (key.indexOf('E') >= 0 || key.indexOf('D') >= 0) {
          delete row[key]
        }
        if (key.indexOf('A') >= 0) {
          var k = {}
          k.s = row[key].h
          lst.push(k)
          f = 0
        }
        if (key.indexOf('B') >= 0) {
          lst[lst.length - 1].q = ''
          lst[lst.length - 1].q = row[key].v
          f = 1
          lst[lst.length - 1].A = []// create list d/a
        }
        if (key.indexOf('C') >= 0) {
          if (f == 1) {
            lst[lst.length - 1].A.push(row[key].v)
          }
        }
      }
      // console.log(lst)
      var a = []
      var b = []
      var c = []
      var d = []
      for (var i = 0; i < lst.length; i++) {
        if (lst[i].s.indexOf('M.VKT') == -1) {
          delete lst[i]
        } else if (i <= 39) {
          a.push(lst[i])
        } else if (39 < i && i <= 71) {
          b.push(lst[i])
        } else if (71 < i && i <= 93) {
          c.push(lst[i])
        } else if (93 < i && i < lst.length) {
          d.push(lst[i])
        }
      }
      var de1 = []
      var de2 = []
      var de3 = []
      for (let k = 0; k < 3; k++) {
        let de = []
        for (let i = 0; i < 8; i++) {
          if (i < 2) {
            let x = RandomX(d)
            de.push(d[x])
            d.splice(x, 1)
          }
          if (i < 4) {
            let x = RandomX(c)
            de.push(c[x])
            c.splice(x, 1)
          }
          if (i < 6) {
            let x = RandomX(b)
            de.push(b[x])
            b.splice(x, 1)
          }
          if (i < 8) {
            let x = RandomX(a)
            de.push(a[x])
            a.splice(x, 1)
          }
        }
        k === 0 ? de1 = de : k === 1 ? de2 = de : k === 2 ? de3 = de : console.log('het')
      }
      this.data.de1 = de1
      this.data.de2 = de2
      this.data.de3 = de3
      // console.log(de1)
      // console.log(de2)
      // console.log(de3)
      this.isQuestions = true
      this.loading = false
    },
    uploadFiles () {
      this.loading = true
      var self = this
      // Reference the FileUpload element.
      var fileUpload = $('#fileUpload')[0]

      // Validate whether File is valid Excel file.
      // var regex = /^([a-zA-Z0-9\s_\\.\-:])+(.xls|.xlsx)$/

      // if (regex.test(fileUpload.value.toLowerCase())) {
      if (true) {
        if (typeof (FileReader) !== 'undefined') {
          var reader = new FileReader()

          // For Browsers other than IE.
          if (reader.readAsBinaryString) {
            reader.onload = function (e) {
              self.ProcessExcel(e.target.result)
            }
            reader.readAsBinaryString(fileUpload.files[0])
          } else {
            // For IE Browser.
            reader.onload = function (e) {
              var data = ''
              var bytes = new Uint8Array(e.target.result)
              for (var i = 0; i < bytes.byteLength; i++) {
                data += String.fromCharCode(bytes[i])
              }
              self.ProcessExcel(data)
            }
            reader.readAsArrayBuffer(fileUpload.files[0])
          }
        } else {
          alert('This browser does not support HTML5.')
          this.loading = false
        }
      } else {
        alert('Please upload a valid Excel file.')
        this.loading = false
      }
    },
    handleClick (tab) {
      this.currentTab = tab.name
    }
  }
}
</script>

<style scoped>
h1, h2 {
  font-weight: 400;
  color: #1f2f3d;
}
.question {
  width: 1280px;
  margin: 0 auto;
  border: dashed 1px #ccc;
  text-align: left;
  padding: 20px
}
.image {
  margin: 20px
}
#upload-file {
  padding: 20px
}
</style>
