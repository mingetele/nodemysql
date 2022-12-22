const express=require('express')
const routes=express.Router()

routes.get('/:table',(req,res)=>{
    //res.send('Aquí si es el select')
    req.getConnection((err,conn)=>{
        if(err) return res.send(err)

        var ssql='select * from '+req.params.table

        ///conn.query('select * from libreriac4', (err,rows)=>{
        conn.query(ssql,(err,rows)=>{
            if(err) return res.send(err)

            res.json(rows)

        })

    })

})

routes.post('/:table',(req,res)=>{
    //res.send('Aquí si es el select')
    req.getConnection((err,conn)=>{
        if(err) return res.send(err)

        let ssql = 'INSERT INTO ' +req.params.table+ ' set ? '
        
        ///conn.query('INSERT INTO libreriac4 set ?', [req.body],(err,rows)=>{
        conn.query(ssql,[req.body],(err,rows)=>{
            if(err) return res.send(err)

            res.send('Add OK!')

        })

    })

})

routes.delete('/:table/:field/:id',(req,res)=>{
    //res.send('Aquí si es el select')
    req.getConnection((err,conn)=>{
        if(err) return res.send(err)

        let sql='DELETE FROM '+req.params.table+' WHERE '+req.params.field+' = ?'
        conn.query(sql, [req.params.id],(err,rows)=>{
            if(err) return res.send(err)
            res.send('Book delete OK!')

        })

    })

})



routes.put('/:table/:field/:id',(req,res)=>{
    //res.send('Aquí si es el select')
    req.getConnection((err,conn)=>{
        if(err) return res.send(err)

        let sql= 'UPDATE '+req.params.table+' set ? WHERE '+req.params.field+' = ?'

        conn.query(sql, [req.body, req.params.id],(err,rows)=>{
            if(err) return res.send(err)

            res.send('Book UPDATE OK!')

        })

    })

})

module.exports=routes