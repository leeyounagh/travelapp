const express =require('express');
const app = express();
const port = 5000;

const mongoose =require('mongoose')
const bodyParser =require('body-parser')
const cookieParser =require('cookie-parser')
const {User} =require('./models/User');
const {auth} =require('./middleware/auth');




app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cookieParser())
mongoose.connect('mongodb+srv://admin:qwer1234@cluster0.l9bb7.mongodb.net/travelapp?retryWrites=true&w=majority'
).then(()=>console.log('mongoDb connected'))
.catch(err=>console.log(err))

app.get('/',(req,res)=>res.send('Hello world!'))

app.post('/api/users/register',(req,res)=>{
    //회원가입할때 필요한 정보들을 client에서 가져오면 
    //그것들을 데이터 베이스에 넣어준다.

    const user = new User(req.body)

    user.save((err,doc)=>{
        if(err) return res.json({success:false,err})
        return res.status(200).json({
          success:true
        })
    })
})
app.get('/api/hello',(req,res)=>{
  res.send('안녕하세요')
})
app.post('/api/users/login', (req, res) => {

    // console.log('ping')
    //요청된 이메일을 데이터베이스에서 있는지 찾는다.
    User.findOne({ email: req.body.email }, (err, user) => {
  
      // console.log('user', user)
      if (!user) {
        return res.json({
          loginSuccess: false,
          message: "제공된 이메일에 해당하는 유저가 없습니다."
        })
      }
  
      //요청된 이메일이 데이터 베이스에 있다면 비밀번호가 맞는 비밀번호 인지 확인.
      user.comparePassword(req.body.password, (err, isMatch) => {
        // console.log('err',err)
  
        // console.log('isMatch',isMatch)
  
        if (!isMatch)
          return res.json({ loginSuccess: false, message: "비밀번호가 틀렸습니다." })
  
        //비밀번호 까지 맞다면 토큰을 생성하기.
        user.generateToken((err, user) => {
          if (err) return res.status(400).send(err);
  
          // 토큰을 저장한다.  어디에 ?  쿠키 , 로컳스토리지 
          res.cookie("x_auth", user.token)
            .status(200)
            .json({ loginSuccess: true, userId: user._id })
        })
      })
    })
  })

  app.get('/api/users/auth', auth, (req, res) => {
    //여기 까지 미들웨어를 통과해 왔다는 얘기는  Authentication 이 True 라는 말.
    res.status(200).json({
      _id: req.user._id,
      isAdmin: req.user.role === 0 ? false : true,
      isAuth: true,
      email: req.user.email,
      name: req.user.name,
      lastname: req.user.lastname,
      role: req.user.role,
      image: req.user.image,
      good:req.user.good,
      history:req.user.history
    })
  })

  app.get('/api/users/logout',auth,(req,res)=>{
      User.findOneAndUpdate({_id:req.user._id},
       {token:""},
       (err,user)=>{
           if(err) return res.json({success:false,err})
           return res.status(200).send({success:true})
       } )
  })

  app.post('/api/users/addToGood',auth,(req,res)=>{
     User.findOne({_id:req.user._id},(err,userInfo)=>{
       let duplicate =false;
       userInfo.good.forEach(item => {
         if(item.id === request.body.contentsId){
          duplicate =true;
         }
       });

       if(duplicate){
         User.findOneAndUpdate({_id:req.user._id,"good.id":req.body.contentsId}),
         {$inc:{"good.$.quantity":1}},
         {new:true},
         (err,userInfo)=>{
           if(err) return response.status(400).json(
             {success:false,err})
             response.status(200).send(userInfo.good)

         }
       } else{
         User.findOneAndUpdate({_id:req.user._id},
          {
            $push:{
              good: {
                id:req.body.contentsId,
                quantity:1,
                image:req.body.image,
                address:req.body.address,
                title:req.body.title,
                date: Date.now()
              }
            }
          },{new:true},
          (err,userInfo)=>{
            if(err) return res.status(400).json({success:false,err})
            res.status(200).send(userInfo.good)
          }
          
          )
       }

     })
})
  
  app.listen(port, () => console.log(`Example app listening on port ${port}!`))