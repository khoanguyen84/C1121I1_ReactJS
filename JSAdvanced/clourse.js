// scope (phạm vi)
// global
// local (block code)
// function
// var name = "Khoa"

// destroy -> giải phóng bộ nhớ
{
    let name = "trường"
    {
        {
            {
                // let name = "Dung"
                console.log(name)
            }
        }
    }
    console.log(name)
}