---
sidebar_position: 2
---

# 角色选择器

get sprite target

一种很好的角色选择器方案

:::tip
只有在 sprite_type 为 `sprite` 或 `id` 或 `drawableID` 时，sprite_name 才有效。
:::

***
## 积木引用时的输入类型
sprite_type: string  
sprite_name: string | number  


***
## 源码
```js title="/myjs/tools.js"
//2.0.1

/**
 * 
 * @param {object} util 
 * @param {string} sprite_type  stage sprite thisSprite thisClone id drawableID
 * @param {string|number} sprite_name  name id drawableID
 * @returns {any} object
 */
function get_sprite_target( util, sprite_type, sprite_name ){
    // 简单的取值
    switch( sprite_type ){
        case 'stage':
            // 背景始终在角色列表的第0个位置
            return util.runtime.targets[0];
        case 'thisSprite':
            // 本体始终在克隆体列表的第0个位置
            return util.target.sprite.clones[0];
        case 'thisClone':
            return util.target;
    }

    // 接下来的肯定要用这个
    if( !util.bddjr_toolbox_v2_sprite_number_cache ){
        // 没有缓存的对象就创建
        util.bddjr_toolbox_v2_sprite_number_cache = {
            name: {
                /* 说明格式
                Stage: 0 //number
                */
            },
            id: {
                /* 说明格式
                "|2On|0TzTO[DRM@?5DX.": 0 //number
                */
            },
            drawableID: {
                /* 说明格式
                0: 0 //number
                */
            },
            number: {
                /* 说明格式
                0: {
                    name: "Stage",
                    id: "|2On|0TzTO[DRM@?5DX.",
                    drawableID: 0
                },
                */
            },
        }
    }

    /**number_cache */
    const NC = util.bddjr_toolbox_v2_sprite_number_cache;

    let return_target;
    let return_target_number;

    switch( sprite_type ){
        case 'sprite':
            if(NC.name[ sprite_name ] !== undefined){
                // 读缓存
                if(
                  util.runtime.targets[
                    NC.name[ sprite_name ]
                  ].sprite.name == sprite_name //是故意用弱类型判断的
                ){
                    // 有缓存的对象，有对应名称的缓存，直接返回
                    return util.runtime.targets[
                        NC.name[ sprite_name ]
                    ];
                }
                // 对不上？依据缓存名称删除对应id缓存
                Reflect.deleteProperty(
                    NC.id ,
                    NC.number[ NC.name[ sprite_name ] ]?.id
                );
                // 对应drawableID
                Reflect.deleteProperty(
                    NC.drawableID ,
                    NC.number[ NC.name[ sprite_name ] ]?.drawableID
                );
                // 对应number一整块
                Reflect.deleteProperty(
                    NC.number ,
                    NC.name[ sprite_name ]
                );
                // name
                Reflect.deleteProperty(
                    NC.name ,
                    sprite_name
                );
            }
            // 重新查找
            for( let i in util.runtime.targets ){
                let J = util.runtime.targets[i];
                if(
                  J.sprite.name == sprite_name //是故意用弱类型判断的
                  &&
                  !J.isStage //用的是sprite模式，所以肯定不能是背景
                ){
                    // 找到了，将要返回的值设置为这个对象，然后退出循环
                    return_target_number = i;
                    return_target = J;
                    break;
                }
            }
            // 退出switch
            break;

        case 'id':
            if(NC.id[ sprite_name ] !== undefined){
                // 读缓存
                if(
                  util.runtime.targets[
                    NC.id[ sprite_name ]
                  ].id == sprite_name //是故意用弱类型判断的
                ){
                    // 有缓存的对象，有对应名称的缓存，直接返回
                    return util.runtime.targets[
                        NC.id[ sprite_name ]
                    ];
                }
                // 对不上？依据缓存名称删除对应name缓存
                Reflect.deleteProperty(
                    NC.name ,
                    NC.number[ NC.name[ sprite_name ] ]?.name
                );
                // 对应drawableID
                Reflect.deleteProperty(
                    NC.drawableID ,
                    NC.number[ NC.name[ sprite_name ] ]?.drawableID
                );
                // 对应number一整块
                Reflect.deleteProperty(
                    NC.number ,
                    NC.name[ sprite_name ]
                );
                // id
                Reflect.deleteProperty(
                    NC.id ,
                    sprite_name
                );
            }
            // 重新查找
            for( let i in util.runtime.targets ){
                let J = util.runtime.targets[i];
                if(J.id == sprite_name){ //是故意用弱类型判断的
                    // 找到了，将要返回的值设置为这个对象，然后退出循环
                    return_target_number = i;
                    return_target = J;
                    break;
                }
            }
            // 退出switch
            break;

        case 'drawableID':
            if(NC.drawableID[ sprite_name ] !== undefined){
                // 读缓存
                if(
                  util.runtime.targets[
                    NC.drawableID[ sprite_name ]
                  ].drawableID == sprite_name //是故意用弱类型判断的
                ){
                    // 有缓存的对象，有对应名称的缓存，直接返回
                    return util.runtime.targets[
                        NC.drawableID[ sprite_name ]
                    ];
                }
                // 对不上？依据缓存名称删除对应name缓存
                Reflect.deleteProperty(
                    NC.name ,
                    NC.number[ NC.name[ sprite_name ] ]?.name
                );
                // 对应id
                Reflect.deleteProperty(
                    NC.id ,
                    NC.number[ NC.name[ sprite_name ] ]?.id
                );
                // 对应number一整块
                Reflect.deleteProperty(
                    NC.number ,
                    NC.name[ sprite_name ]
                );
                // drawableID
                Reflect.deleteProperty(
                    NC.drawableID ,
                    sprite_name
                );
            }
            // 重新查找
            for( let i in util.runtime.targets ){
                let J = util.runtime.targets[i];
                if(J.drawableID == sprite_name){ //是故意用弱类型判断的
                    // 找到了，将要返回的值设置为这个对象，然后退出循环
                    return_target_number = i;
                    return_target = J;
                    break;
                }
            }
            // 退出switch
            break;
    }

    if(return_target === undefined){
        // 找不到？抛出错误
        throw `Can not get sprite target from type:${sprite_type} name:${sprite_name}`;
    }


    // 加入缓存
    if(return_target.isOriginal){
        // 不是克隆体才会缓存名称
        NC.name[ return_target.sprite.name ] = return_target_number;
    }
    NC.id[ return_target.id ] = return_target_number;
    NC.drawableID[ return_target.drawableID ] = return_target_number;

    if(NC.number[ return_target_number ]){
        // 有残留的number缓存？找到关联的其它缓存并清除
        Reflect.deleteProperty(
            NC.name ,
            NC.number[ return_target_number ].name
        );
        Reflect.deleteProperty(
            NC.id ,
            NC.number[ return_target_number ].id
        );
        Reflect.deleteProperty(
            NC.drawableID ,
            NC.number[ return_target_number ].drawableID
        );
    }
    // 覆盖一个新的缓存到number
    NC.number[ return_target_number ] = {
        number: return_target_number,
        drawableID: return_target.drawableID,
        id: return_target.id,
        // 不是克隆体才会缓存名称，null从逻辑上不会导致故障
        name: return_target.isOriginal ? return_target.sprite.name : null
    }

    return return_target;
}

module.exports.get_sprite_target = get_sprite_target;
```
